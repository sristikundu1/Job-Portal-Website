import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { useLoaderData } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Helmet } from "react-helmet-async";
import ReviewRow from "./ReviewRow";

const Reviews = () => {
    const reviews = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>DreamCatalyst | Reviews</title>
            </Helmet>
            <NavBar></NavBar>
            <div>
                <h2 className="font-love text-5xl text-center mb-4 text-[#219C90]">Occupational Odyssey</h2>
                <p className="text-center font-medium italic mb-10 text-[#12486B]">Insights that Matter: Real Voices, Real Experiences, Your Job Journey</p>

                <Table striped bordered hover className="custom-table">
                    <thead>
                        <tr className="bg-[#CD5C08] font-bold text-xl">
                            <th>Job Title</th>
                            <th>Posted By</th>
                            <th>Email</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews?.length > 0 && reviews?.map((allreview) => <ReviewRow
                        key={allreview._id}
                        allreview={allreview}></ReviewRow>

                        )}
                    </tbody>
                </Table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Reviews;