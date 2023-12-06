// import NavBar from "../../Components/NavBar/NavBar";
// import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
// import Jobs from "../../Components/Jobs/Jobs";
import WorkingProgress from "../../Components/WorkingProgress/WorkingProgress";
import Resume from "../../Components/Resume/Resume";
import { Helmet } from "react-helmet-async";
import AllJobs from "../../Components/Jobs/AllJobs";


const Home = () => {
    // const jobData = useLoaderData();
    // jobData ={jobData}
    return (
        <div>
             <Helmet>
                <title>DreamCatalyst | Home</title>
            </Helmet>
           {/* <NavBar></NavBar> */}
           <Banner></Banner>
           {/* <Jobs></Jobs> */}
           <AllJobs></AllJobs>
           <WorkingProgress></WorkingProgress>
           <Resume></Resume>
           <Footer></Footer>
        </div>
    );
};

export default Home;