import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Table from 'react-bootstrap/Table';
import AppliedJobRow from "./AppliedJobRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AppliedJobs = () => {

    const { user } = useContext(AuthContext);
    const [appliedJobs, setAppliedJobs] = useState([]);

    const url = `http://localhost:5000/appliedJobs?name=${user.displayName}`

    useEffect(() => {
        // axios.get(url, {withCredentials: true})
        // .then(res => {
        //     setMyJobs(res.data)
        // })
        fetch(url)
            .then(res => res.json())
            .then(data => setAppliedJobs(data))
    }, [url])


    return (
        <div>
            <NavBar></NavBar>

            <div>

                <Table striped bordered hover className="custom-table">
                    <thead>
                        <tr className="bg-[#CD5C08] font-bold">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job Title</th>
                            <th>Posted By</th>
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
        </div>
    );
};

export default AppliedJobs;