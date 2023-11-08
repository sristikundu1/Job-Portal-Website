import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const UpdateJobs = () => {
    const job = useLoaderData();
const{user} = useContext(AuthContext);
    const { _id, url, title, name, category, postdate, deadline, number, salary,company,email, description } = job;

    const handleUpdateJob = e => {
        e.preventDefault();

        const form = e.target;

        const url = form.url.value;
        const title = form.title.value;
        const name = form.name.value;
        const category = form.category.value;
        const postdate = form.postdate.value;
        const deadline = form.deadline.value;
        const number = form.number.value;
        const salary = form.salary.value;
        const company = form.company.value;
        const description = form.description.value;


        const updatedJob = { url, title, name, category, postdate, deadline, number,salary,company,description };
        console.log(updatedJob);


        fetch(` https://dream-catalyst-server.vercel.app/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Inside post response", data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'job updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div>
            <NavBar></NavBar>

            <div>



                <h2 className="font-love text-5xl text-center mb-4 text-[#004225]">Update Job Of :{title}</h2>
                <p className="text-center font-medium mb-10">Welcome to our enhanced job page, designed to help <br /> employers easily find the perfect candidates for their team </p>

                <div className="">
                    <div className="flex flex-col justify-center items-center mb-6 ">

                        <div className="  w-[800px]  shadow-2xl  rounded-lg bg-[#EADBC8]">
                            <form onSubmit={handleUpdateJob} className="card-body">
                                <div className="flex gap-3 w-full">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold">Banner URL</span>
                                        </label>
                                        <input type="text" name="url" defaultValue={url} placeholder="Enter the img url of job banner" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold">Job Title</span>
                                        </label>
                                        <input type="text" name="title" defaultValue={title} placeholder="Enter Job title" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="flex gap-3 w-full">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold">User Name</span>
                                        </label>
                                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Enter the img url of job banner" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold">Job Category</span>
                                        </label>

                                        <select className="border rounded-lg h-12 pl-3" name="category" defaultValue={category} id="">
                                            <option value="Select category">Select Category</option>
                                            <option value="Remote">Remote</option>
                                            <option value="Part-Time">Part-Time</option>
                                            <option value="Hybrid">Hybrid</option>
                                            <option value="Hybrid">On Site</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-3 w-full">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold">Posting Date</span>
                                        </label>
                                        <input type="date" name="postdate" defaultValue={postdate} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold">Deadline</span>
                                        </label>
                                        <input type="date" name="deadline" defaultValue={deadline} className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="flex gap-3 w-full">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold">Applicants Number</span>
                                        </label>
                                        <input type="number" name="number"  placeholder="Job Applicants Number" defaultValue={0} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold">Salary range</span>
                                        </label>
                                        <input type="range" name="salary" defaultValue={salary} min={1000} max={100000} className="input input-bordered" required />

                                    </div>
                                </div>
                                <div className="flex gap-3 w-full">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-bold"> Company Logo</span>
                                        </label>
                                        <input type="text" name="company" placeholder="Enter the img url of company logo" className="input input-bordered" required />
                                    </div>
                                   
                                </div>
                                <div className="flex gap-3 w-full">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-bold"> Job Description</span>
                                        </label>
                                        <textarea className="border rounded-lg p-4" name="description" defaultValue={description} placeholder="Write your job description" id="" cols="30" rows="10"></textarea>
                                    </div>

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FFA33C] capitalize text-black font-bold text-2xl">Update Job</button>
                                </div>
                            </form>
                        </div>

                    </div>


                </div>
            </div>


            <Footer></Footer>

        </div>
    );
};

export default UpdateJobs;