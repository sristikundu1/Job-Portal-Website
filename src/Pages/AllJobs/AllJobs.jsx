// import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { useLoaderData } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Table from 'react-bootstrap/Table';
import JobsRow from "./JobsRow";

const AllJobs = () => {

    const jobs = useLoaderData();

    return (
        <div>
            <NavBar></NavBar>
            <div>
                <h2 className="font-love text-5xl text-center mb-4 text-[#219C90]">Browse Our Jobs</h2>
                <p className="text-center font-medium italic mb-10 text-[#12486B]">Discover a diverse array of job opportunities on <br /> our comprehensive job listings page.</p>

                <div className="join relative flex justify-center items-center my-8">
                    <span className="absolute top-5 right-[800px]"><BsSearch></BsSearch></span>
                    <input className="input input-bordered join-item pl-9" placeholder="Seaarch job title" />
                    <button className="btn join-item rounded-r-full capitalize bg-[#EE9322] font-bold">Search</button>
                </div>

                <Table striped bordered hover className="custom-table">
                    <thead>
                        <tr className="bg-[#CD5C08] font-bold text-xl">
                            <th>Job Title</th>
                            <th>Posted By</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs?.length > 0 && jobs?.map((alljob) => <JobsRow

                            key={alljob._id}
                            alljob={alljob}></JobsRow>


                        )}
                    </tbody>
                </Table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllJobs;