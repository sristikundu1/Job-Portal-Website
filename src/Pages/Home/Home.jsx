// import NavBar from "../../Components/NavBar/NavBar";

import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Jobs from "../../Components/Jobs/Jobs";
import WorkingProgress from "../../Components/WorkingProgress/WorkingProgress";
import Resume from "../../Components/Resume/Resume";


const Home = () => {
    const jobData = useLoaderData();

    return (
        <div>
           {/* <NavBar></NavBar> */}
           <Banner></Banner>
           <Jobs jobData ={jobData}></Jobs>
           <WorkingProgress></WorkingProgress>
           <Resume></Resume>
           <Footer></Footer>
        </div>
    );
};

export default Home;