import { useContext, useState } from "react";
import { BsEnvelopeAt, BsLockFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Login = () => {
    const { googleSignIn } = useContext(AuthContext);
    const { logIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const [success, setSuccess] = useState("");
    const [logINError, setLogInError] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleClickGoogle = () => {
        googleSignIn().then((result) => {
            console.log(result.user);
            navigate(location?.state ? location.state : "/")
        })

    }

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLogInError('');
        setSuccess('');

        if ((email, password)) {
            logIn(email, password)
                .then((result) => {
                    console.log(result.user);
                    setSuccess("user loged successfully");

                    // console.log(user);
                    // setSuccess("user loged successfully");
                    const user = { email }

                    axios.post('https://dream-catalyst-server.vercel.app/jwt', user, { withCredentials: true })
                        .then(res => {
                            console.log(res.data)
                            if (res.data.success) {
                                setSuccess("user loged successfully");

                                navigate(location?.state ? location.state : "/")
                            }
                        })


                })
                .catch(error => {
                    console.error(error);
                    setLogInError(error.message);
                })
        }
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between py-10">
                <h2 className="font-love font-bold text-3xl">DreamCatalyst</h2>
                <p className="font-medium text-xl">New User? <Link className="text-[#7743DB]" to="/register">Please Register</Link>
                </p>
            </div>
            <div className="grid grid-cols-7 ">

                <div className=" col-span-4">
                    <img src="https://i.ibb.co/r0Q5zRR/login.gif" alt="" />
                </div>

                <div className=" col-span-3">
                    <h2 className="font-bold text-3xl text-center ">Welcome Back</h2>
                    <p className="text-[#A9A9A9] text-center mt-3">Login to continue</p>
                    <form onSubmit={handleLogIn}>
                        <div className="relative mt-16">
                            <span className="absolute top-6 left-4 text-[#7743DB] folt-bold"><BsEnvelopeAt></BsEnvelopeAt></span>
                            <input className="w-full h-16 border-2 border-[#7743DB] p-4 pl-10 rounded-lg" placeholder="Enter Your Email" type="email" name="email" id="email" />
                        </div>

                        <div className="relative mt-10">
                            <span className="absolute top-6 left-4 text-[#7743DB] folt-bold"><BsLockFill></BsLockFill></span>
                            <input className="w-full h-16 border-2 border-[#7743DB] p-4 pl-10 rounded-lg" placeholder="Enter Password" type={showPassword ? "text" : "password"} name="password" id="password" required />
                            <span className='absolute top-7 right-3' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className=" text-[#7743DB]"></FaEyeSlash> : <FaEye className="text-[#7743DB]"></FaEye>}
                            </span>
                        </div>
                        <input className="btn bg-[#7743DB] text-white w-44 capitalize mt-5 ml-44 rounded-3xl font-bold text-xl" type="submit" value="Login" />
                    </form>

                    {
                        logINError && <p>{logINError}</p>

                    }
                    {
                        success && <p>{success}</p>

                    }

                    <div className=" flex justify-center items-center gap-5 mt-10">
                        <h2 className="pl-16">Login with:</h2>


                        <img onClick={handleClickGoogle} className="w-8" src="https://i.ibb.co/fMBfZC6/google.jpg" alt="" />


                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;