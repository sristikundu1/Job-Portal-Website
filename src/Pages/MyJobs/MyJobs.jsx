import { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { AuthContext } from "../../Providers/AuthProvider";
import MyJobsRow from "./MyJobsRow";
import Swal from "sweetalert2";

const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [myjobs, setMyJobs] = useState([]);

    const url = `http://localhost:5000/jobs?name=${user.displayName}`

    useEffect(() => {
        // axios.get(url, {withCredentials: true})
        // .then(res => {
        //     setMyJobs(res.data)
        // })
        fetch(url)
            .then(res => res.json())
            .then(data => setMyJobs(data))
    }, [url])

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {

                        //delete one data use deletedCount > 0
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your job has been deleted.',
                                'success'
                            )

                            //delete from the UI

                            const remainingUsers = myjobs.filter(myjob => myjob._id !== id);// dont delete which id is not matched
                            setMyJobs(remainingUsers);
                        }
                    })

            }
        })

    }



    return (
        <div>
            <NavBar></NavBar>

            <div>
                <h2 className="font-love text-5xl text-center mb-4 text-[#004225]">My Jobs</h2>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                           
                            <thead>
                                <tr className=" font-extrabold bg-[#FFDFDF] text-[#A2C579]">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Job Photo</th>
                                    <th>Job Title</th>
                                    <th>Posted By</th>
                                    <th>Job Category</th>
                                    <th>Job Posting Date</th>
                                    <th>Application Deadline</th>
                                    <th>Job Applicants</th>
                                    <th>Salary</th>
                                    <th>Job Description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myjobs.map((job) => <MyJobsRow
                                        key={job._id}
                                         job={job}
                                         handleDelete={handleDelete}
                                        >

                                    </MyJobsRow>

                                    )
                                }


                            </tbody>


                        </table>
                    </div>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyJobs;

