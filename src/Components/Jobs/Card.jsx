
import { LuCalendarClock } from "react-icons/lu";
import { FcAlarmClock, FcConferenceCall } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
// const Card = ({ id, name, title,category, postingDate, deadline, salaryRange, applicants }) => {
const Card = ({ jobitem }) => {

    const cardStyle = {
        border: '2px solid #ccc',
      
        height:'320px',
        padding: '30px',
        margin: '10px',
        borderRadius: '15px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    };

    const {  title, name, postdate, deadline,number,salary, _id } = jobitem;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    // const axiosSecure = useAxiosSecure();
    // const[refetch] = useJob();

    // const handleclick = e =>{
    //     Swal.fire({
    //         title: 'Error!',
    //         text: 'You have to log in first to view details',
    //         icon: 'error',
    //         confirmButtonText: 'Ok'
    //     })
    // }
    

    const handleclick = () => {
        if (user && user.email) {
        //    insert data in the database
            const alljobs= {
                jobId: _id,
                email: user.email,
                title, name, postdate, deadline,number,salary
            }

            navigate(`/jobdetail/${_id}`, { state: { from: location } });
            // axiosSecure.post("/jobs", cartItem)
            //     .then(res => {
            //         console.log(res.data);
            //         if(res.data.insertedId){
            //             Swal.fire({
            //                 position: "top-end",
            //                 icon: "success",
            //                 title: `${name} added to your cart`,
            //                 showConfirmButton: false,
            //                 timer: 1500
            //               });
            //             //   refetch the cart to update the cart items count
            //               refetch();
            //         }
            //     })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "ok,, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    }

    return (
        <div>
            <div style={cardStyle} className="text-center space-y-4 h-[400px] lg:w-[400px] bg-[#FFF6F6]">
                <h2>By: <span className="font-medium italic">{name}</span> </h2>
                <p className="font-bold text-2xl">{title}</p>
                <div className="flex justify-between">
                    <p className="flex justify-center items-center gap-3"><LuCalendarClock className="font-bold text-[#2B3499] text-2xl"></LuCalendarClock>  {postdate}</p>
                    <p className="flex justify-center items-center gap-3"> <FcAlarmClock className="font-bold text-2xl"></FcAlarmClock>{deadline}</p>
                </div>
                <p className="font-bold">{salary}/month</p>
                <p className="flex justify-center items-center gap-3"><FcConferenceCall className="font-bold text-2xl"></FcConferenceCall> Number of Applicants: <span className="font-medium text-xl">{number}</span> </p>
                {/* {
                    user ? <>
                        <Link to={`/jobdetail/${id}`}>
                            <button className="btn bg-[#FFA33C] capitalize text-[#1F1717] font-bold text-xl w-full rounded-3xl mt-4">View Details</button>
                        </Link>

                    </> :
                        <> */}
                        
                        <button onClick={handleclick} className="btn bg-[#FFA33C] capitalize text-[#1F1717] font-bold text-xl w-full rounded-3xl mt-4">View Details</button>
                        {/* </>
                } */}
            </div>

        </div>
    );
};

export default Card;