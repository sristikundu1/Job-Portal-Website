import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const JobsRow = ({ alljob }) => {

    const { _id, title, name, postdate, deadline, salary } = alljob;
    return (


        <tr key={_id} className='bg-[#F5E8B7] text-[#186F65]'>
            <td className='font-bold'>{title}</td>
            <td>{name}</td>
            <td>{postdate}</td>
            <td>{deadline}</td>
            <td>{salary}</td>

            <td>
               <Link to={`/jobdetail/${_id}`}>
               <Button variant="info" className="bg-[#6A9C89] rounded-3xl capitalize text-white">Details</Button>
               </Link>
            </td>
        </tr>


    );
};

export default JobsRow;