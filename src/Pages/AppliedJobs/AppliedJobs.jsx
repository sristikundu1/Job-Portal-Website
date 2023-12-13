import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Table from 'react-bootstrap/Table';
import AppliedJobRow from "./AppliedJobRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import Button from 'react-bootstrap/Button';


const AppliedJobs = () => {

    const { user } = useContext(AuthContext);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [jobProfile, setJobProfile] = useState([]);

    const url = ` https://dream-catalyst-server.vercel.app/appliedJobs?email=${user.email}`


    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setAppliedJobs(res.data)
            })

    }, [url])

    const url2 = ` https://dream-catalyst-server.vercel.app/profile?email=${user.email}`
    useEffect(() => {
        axios.get(url2, { withCredentials: true })
            .then(res => {
                setJobProfile(res.data)
            })

    }, [url2])



    // const handleUpdateProfile = (e,profileId) => {
    //     e.preventDefault();

    //     const form = e.target;

    //     // const _id = jobProfile._id;

    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const number = form.number.value;
    //     const address = form.address.value;
    //     const photo = form.photo.value;
    //     const resume = form.resume.files[0].name;
    //     const education = form.education.value;
    //     const role = form.role.value;
    //     const category = form.category.value;
    //     const salary = form.salary.value;
    //     const type = form.type.value;

    //     const updateProfile = { name, email, number, address, photo, resume, education, role, category, salary, type };
    //     console.log(updateProfile);


    //     fetch(` https://dream-catalyst-server.vercel.app/profile/${profileId}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': "application/json"
    //         },
    //         body: JSON.stringify(updateProfile)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log("Inside post response", data);
    //             if (data.modifiedCount > 0) {
    //                 Swal.fire({
    //                     title: 'success!',
    //                     text: 'profile updated successfully',
    //                     icon: 'success',
    //                     confirmButtonText: 'Ok'
    //                 })


    //                 form.reset();

    //             }
    //         })
    // }


    return (
        <div>

            <Helmet>
                <title>DreamCatalyst | AppliedJob</title>
            </Helmet>


            <NavBar></NavBar>

            <div>

                <Table striped bordered hover className="custom-table">
                    <thead>
                        <tr className="bg-[#CD5C08] font-bold">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job Title</th>
                            <th>Job Category</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary</th>
                            <th>Job Description</th>
                            <th>Resume</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {appliedJobs.map((alljob) => <AppliedJobRow
                            key={alljob._id}
                            alljob={alljob}>
                        </AppliedJobRow>

                        )}
                    </tbody>
                </Table>





            </div>
            <div>
                <h2 className="font-love text-5xl text-center mb-4 text-[#004225] mt-10">My Profile</h2>

                <div>
                    {
                        jobProfile.map((profileItem, index) => (
                            <div key={index}>

                                <div className="flex justify-center">

                                    <img src={profileItem.photo} alt="Job Profile" className="max-w-66 h-66 rounded-lg" />
                                </div>
                                <div className="w-[700px] ml-80 my-7">
                                    <div className="collapse bg-[#94d2bd]">
                                        <input type="checkbox" />
                                        <div className="collapse-title text-xl font-medium">
                                            Personal Information
                                        </div>
                                        <div className="collapse-content">
                                            <ul className="font-medium space-y-3">
                                                <li>Full Name:{profileItem.name}</li>
                                                <li>Email:{profileItem.email}</li>
                                                <li>Phone Number:{profileItem.number}</li>
                                                <li>Address:{profileItem.address}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collapse bg-[#94d2bd]">
                                        <input type="checkbox" />
                                        <div className="collapse-title text-xl font-medium">
                                            Professional Details
                                        </div>
                                        <div className="collapse-content">
                                            <ul className="font-medium space-y-3">
                                                <li>CV/Resume:{profileItem.resume}</li>
                                                <li>Educational Institute:{profileItem.education}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collapse bg-[#94d2bd]">
                                        <input type="checkbox" />
                                        <div className="collapse-title text-xl font-medium">
                                            Preferences and Interests
                                        </div>
                                        <div className="collapse-content">
                                            <ul className="font-medium space-y-3">
                                                <li>Job Role/Industries:{profileItem.role}</li>
                                                <li>Preferred Work Location:{profileItem.type}</li>
                                                <li>Expected Salary:{profileItem.salary}</li>
                                                <li>Type of Job:{profileItem.category}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        ))
                    }
                </div>

                {/* <button className="btn bg-[#CE5A67] capitalize text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Update</button> */}

                {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center text-[#025464]">Update Your Profile</h3>
                        <form onSubmit={handleUpdateProfile} className="card-body">
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
                        <div className="modal-action">
                            <form method="dialog">
                                if there is a button in form, it will close the modal
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog> */}


            </div>

            <Footer></Footer>

        </div>


    );
};

export default AppliedJobs;