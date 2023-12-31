// import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
// import { AuthContext } from '../../Providers/AuthProvider';
import { usePDF } from 'react-to-pdf';

const AppliedJobRow = ({ alljob }) => {
    // const{user} = useContext(AuthContext);

    const { toPDF,targetRef } = usePDF({filename: 'appliedjob.pdf'});

    const { _id, name, email, resume, title, category, postdate, deadline, number, salary, description } = alljob;
    
    
    return (
            <tr
            ref={targetRef}
            key={_id} className='bg-[#F5E8B7] text-[#186F65]'>
                <td className='font-bold'>{name}</td>
                <td>{email}</td>
                <td className="font-bold">{title}</td>
                <td>{category}</td>
                <td>{postdate}</td>
                <td>{deadline}</td>
                <td>{salary}</td>
                <td>{description}</td>
                <td>{resume}</td>

                <td>

                    <Button onClick={() => toPDF()}  variant="info" className="bg-[#6A9C89] rounded-3xl capitalize text-white">Download</Button>

                </td>
            </tr>





    );
};

export default AppliedJobRow;