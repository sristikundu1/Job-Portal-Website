import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Ragistration = () => {

    const { register } = useContext(AuthContext);


    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        setRegisterError('');
        setSuccess('');

        if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&@? "])[a-zA-Z0-9!#$%&@?]{6,15}$/.test(password)) {
            setRegisterError("please give strong password");
            return;
        }
        else {
            register(email, password, name, photo).then((user) => {
                console.log("User registered successfully:", user);
                setSuccess("User created successfully");
                // You can access user.displayName and user.photoURL here
            })
                .catch((error) => {
                    console.error('Registration error:', error);
                    setRegisterError(error.message);
                });
        }


    }


    return (
        <div>
            <Helmet>
                <title>DreamCatalyst | Registration</title>
            </Helmet>

            <div
                className="h-screen relative"
                style={{
                    backgroundImage: "url('https://i.ibb.co/9t1dzJM/registration.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center ">
                    <div className=" p-8 rounded-md">
                        <h2 className="text-5xl font-bold mb-9 text-[#186F65]">Registration</h2>


                        <form onSubmit={handleRegister} className="grid grid-cols-2 gap-3">
                            <input type="text" className="w-96 p-4 rounded-3xl bg-[#FECDA6]" placeholder="Your Name" name="name" id="name" required />

                            <input type="email" className="w-96 p-4 rounded-3xl bg-[#FECDA6]" placeholder="Your Email" name="email" id="email" required />

                            <div className='relative'>
                                <input type={showPassword ? "text" : "password"} className="w-96 p-4 rounded-3xl bg-[#FECDA6]" placeholder="Your Password" name="password" id="password" required />
                                <span className='absolute top-6 right-3' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </span>
                            </div>

                            <input type="text" className="w-96 p-4 rounded-3xl bg-[#FECDA6]" placeholder="Your Photo URL" name="photo" id="photo" required />

                            <input className="btn  bg-[#C70039] text-white w-44 capitalize mt-5  rounded-3xl font-bold text-xl" type="submit" value="Register" />
                        </form>

                        {
                            registerError && <p>{registerError}</p>

                        }
                        {
                            success && <p>{success}</p>

                        }

                        <p className="font-medium text-xl mt-4 text-[#004225]">Already have an account? <Link className="text-[#E55604]" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Ragistration;