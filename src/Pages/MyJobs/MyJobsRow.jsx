import { Link } from "react-router-dom";

const MyJobsRow = ({ job,handleDelete }) => {

    const { _id, url, title, name, category, postdate, deadline, number, salary, email, description } = job;

    return (

        <tr className="bg-[#FFF6F6]">
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-28 h-24">
                        <img src={url} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>


            </td>

            <td className="font-bold">{title}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{postdate}</td>
            <td>{deadline}</td>
            <td>{number}</td>
            <td>{salary}</td>
            <td>{description}</td>
            <th>
                <div className="join join-vertical">
                    <Link to={`/updatejob/${_id}`}>
                        <button className="btn join-item bg-[#F875AA] capitalize text-[#F5F7F8] font-bold text-xl mb-1">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item bg-[#F875AA] capitalize text-[#F5F7F8] font-bold text-xl">Delete</button>

                </div>

            </th>
        </tr>

    );
};

export default MyJobsRow;