import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Table from 'react-bootstrap/Table';
import AppliedJobRow from "./AppliedJobRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
// import ReactToPdf from 'react-to-pdf';
// import { useRef } from 'react';


const AppliedJobs = () => {


    const { user } = useContext(AuthContext);
    const [appliedJobs, setAppliedJobs] = useState([]);

    const url = ` https://dream-catalyst-server.vercel.app/appliedJobs?email=${user.email}`

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setAppliedJobs(res.data)
            })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setAppliedJobs(data))
    }, [url])
    // const componentRef = useRef();

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

            <Footer></Footer>
{/* 
            <ReactToPdf targetRef={componentRef} filename="applied_jobs.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate PDF</button>
                )}
            </ReactToPdf> */}

        </div>


    );
};

export default AppliedJobs;