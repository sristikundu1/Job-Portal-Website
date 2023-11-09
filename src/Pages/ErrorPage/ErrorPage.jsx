import { Link } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <div>
             <Helmet>
                <title>DreamCatalyst | 404</title>
            </Helmet>
            <Link to="/"><h2 className="font-love text-[#ED7D31] font-bold text-2xl text-center my-10 flex justify-center items-center gap-2">Back to Home.<BsHouseFill className="text-[#4F4A45]"></BsHouseFill></h2></Link>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TW33JVG/404-snow.gif)' }}>
            </div>
            
        </div>
    );
};

export default ErrorPage;