import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import NavBar from "../../Components/NavBar/NavBar";
import { Link } from "react-router-dom";


const Profile = () => {
    const { user } = useContext(AuthContext);

    const handleAddProfile = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const address = form.address.value;
        const photo = form.photo.value;
        const resume = form.resume.files[0].name;
        const education = form.education.value;
        const role = form.role.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const type = form.type.value;

        const newProfile = { name, email, number, address, photo, resume, education, role, category, salary, type };
        console.log(newProfile);


        fetch(" https://dream-catalyst-server.vercel.app/profile", {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Inside post response", data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Your Profile created successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>DreamCatalyst | Reviews</title>
            </Helmet>
            <NavBar></NavBar>
            <div>
                <h2 className="font-love text-5xl text-center mb-4 text-[#219C90]">Build Your Professional Profile: Let us Get Started!</h2>

                <div>
                    <form onSubmit={handleAddProfile} className="card-body">
                        <div>
                            <h2 className="text-center font-bold text-2xl mb-4">Personal Information</h2>

                            <div className="flex gap-3 w-full">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Full Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="Enter the img url of job banner" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Email Address</span>
                                    </label>
                                    <input type="email" name="email" placeholder="User Email" defaultValue={user?.email} className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-3 w-full">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Contact Number</span>
                                    </label>
                                    <input type="text" name="number" placeholder="Enter Your phone number" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Address</span>
                                    </label>

                                    <input type="text" name="address" placeholder="Enter Your Address" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-3 w-full">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Your Photo</span>
                                    </label>

                                    <input type="text" defaultValue={user?.photoURL} name="photo" placeholder="Enter Your Photo url" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-center font-bold text-2xl my-6">Professional Details</h2>

                            <div className="flex gap-3 w-full">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Resume/CV Upload</span>
                                    </label>
                                    <input type="file" name="resume" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Education</span>
                                    </label>
                                    <input type="text" name="education" placeholder="Enter Your last Educatinal Institute Name" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-center font-bold text-2xl my-6">Preferences and Interests</h2>

                            <div className="flex gap-3 w-full">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Desired Job Roles or Industries</span>
                                    </label>
                                    <input type="text" name="role" placeholder="Enter your desired job roles or industries" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Preferred Work Location</span>
                                    </label>

                                    <select className="border rounded-lg h-12 pl-3" name="category" id="">
                                        <option value="Select category">Select Category</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Part-Time">City</option>
                                        <option value="Hybrid">Abroad</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-3 w-full">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Salary Expectations</span>
                                    </label>
                                    <input type="text" name="salary" placeholder="Enter Your salary expectations" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Type of Employment </span>
                                    </label>

                                    <select className="border rounded-lg h-12 pl-3" name="type" id="">
                                        <option value="Select category">Select Category</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Part-Time">Part-Time</option>
                                        <option value="Hybrid">Hybrid</option>
                                        <option value="On Site">On Site</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#FFA33C] capitalize text-black font-bold text-2xl">Submit</button>
                        </div>
                    </form>
                </div>
            </div >

           

        </div >
    );
};

export default Profile;