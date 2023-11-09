
import { LuCalendarClock } from "react-icons/lu";
import { FcAlarmClock, FcConferenceCall } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const Card = ({ id, name, title,category, postingDate, deadline, salaryRange, applicants }) => {

    const { user } = useContext(AuthContext);

    const cardStyle = {
        border: '2px solid #ccc',
      
        height:'320px',
        padding: '30px',
        margin: '10px',
        borderRadius: '15px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    };

    const handleclick = e =>{
        Swal.fire({
            title: 'Error!',
            text: 'You have to log in first to view details',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    return (
        <div>
            <div style={cardStyle} className="text-center space-y-4 h-[400px] lg:w-[400px] bg-[#FFF6F6]">
                <h2>By: <span className="font-medium italic">{name}</span> </h2>
                <p className="font-bold text-2xl">{title}</p>
                <div className="flex justify-between">
                    <p className="flex justify-center items-center gap-3"><LuCalendarClock className="font-bold text-[#2B3499] text-2xl"></LuCalendarClock>  {postingDate}</p>
                    <p className="flex justify-center items-center gap-3"> <FcAlarmClock className="font-bold text-2xl"></FcAlarmClock>{deadline}</p>
                </div>
                <p className="font-bold">{salaryRange}/month</p>
                <p className="flex justify-center items-center gap-3"><FcConferenceCall className="font-bold text-2xl"></FcConferenceCall> Number of Applicants: <span className="font-medium text-xl">{applicants}</span> </p>
                {
                    user ? <>
                        <Link to={`/jobdetail/${id}`}>
                            <button className="btn bg-[#FFA33C] capitalize text-[#1F1717] font-bold text-xl w-full rounded-3xl mt-4">View Details</button>
                        </Link>

                    </> :
                        <>
                        
                        <Link to="/login"><button onClick={handleclick} className="btn bg-[#FFA33C] capitalize text-[#1F1717] font-bold text-xl w-full rounded-3xl mt-4">View Details</button></Link>
                        </>
                }
            </div>

        </div>
    );
};

export default Card;