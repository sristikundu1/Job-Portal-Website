import { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const JobDetails = () => {
    const jobdetails = useLoaderData();
    const { user } = useContext(AuthContext);

    const { _id, url, title, name, category, postdate, deadline, number, salary, company, description } = jobdetails;

    // const currentDate = Date.now();
    // const deadlineDate = new Date(deadline).getTime();
    // console.log(deadlineDate,currentDate)

    const handleApplyJob = e => {

        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const resume = form.resume.files[0].name;

        const appliedJob = { name, email, resume, url, title, category, postdate, deadline, number, salary, company, description };
        console.log(appliedJob);

        fetch(" https://dream-catalyst-server.vercel.app/appliedJobs", {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(appliedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Inside post response", data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'You have applied for a job successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })

    }

    const showToast = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Toast Message',
            text: 'You Canot apply for this job',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000, // Adjust the duration of the toast
        });
    };


    return (
        <div>
             <Helmet>
                <title>DreamCatalyst | JobDetails</title>
            </Helmet>
            <NavBar></NavBar>
            <h2 className="font-love text-5xl text-center  text-[#219C90] mb-16">Job Detail</h2>
            <img className="w-screen h-[400px] rounded-lg" src={jobdetails?.company} alt="" />
            <div className="max-w-5xl mx-auto">
                <div className="flex mt-9 justify-between items-center gap-4">
                    <img className="rounded-full w-96" src={url} alt="" />
                    <h2 className="font-bold text-6xl text-[#3AA6B9]">{title}</h2>
                </div>
                <h2 className="font-love text-5xl text-center  text-[#FF9EAA] mb-10 mt-16">Job Description</h2>
                <p className="text-center font-medium text-[#6554AF]">{description}</p>
                <div className="flex mt-9 justify-around items-center gap-4">
                    <p className="flex justify-center items-center gap-2"> <BiDollarCircle className="text-3xl font-bold"></BiDollarCircle> <span className="font-bold text-[#7E1717]">Salary:</span> {salary}/month</p>
                    <p className="flex justify-center items-center gap-2"> <BsPeopleFill className="text-3xl font-bold"></BsPeopleFill> <span className="font-bold text-[#7E1717]">Number Of Applicants:</span> {number}</p>
                </div>
                {
                    name !== user.displayName ? (
                        <button
                            onClick={() => {
                                if (new Date() > new Date(deadline)) {
                                    showToast("The application deadline has passed.");
                                } else if (name === user.displayName) {
                                    showToast("You cannot apply for your own job.");
                                } else {
                                    document.getElementById('my_modal_1').showModal();
                                }
                            }}
                            className="btn w-44 bg-[#CE5A67] capitalize rounded-3xl text-2xl my-16 text-white ml-[400px]"
                        >
                            Apply
                        </button>
                    )
                        :
                        <>

                            <button onClick={showToast} className="btn w-44 bg-[#CE5A67] capitalize rounded-3xl text-2xl my-16 text-white ml-[400px]">Apply</button>
                        </>
                }

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center text-[#025464]">Apply For the job</h3>
                        <form onSubmit={handleApplyJob} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Resume</span>
                                </label>
                                <input type="file" name="resume" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn capitalize bg-[#E57C23]">Submit</button>
                            </div>
                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">close</button>
                            </form>
                        </div>
                    </div>
                </dialog>



            </div>

            <Footer></Footer>
        </div>
    );
};

export default JobDetails;