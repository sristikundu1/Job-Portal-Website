

const ReviewRow = ({allreview}) => {
    const { _id, title, name, email, review } = allreview;
    return (


        <tr key={_id} className='bg-[#F5E8B7] text-[#186F65]'>
            <td className='font-bold'>{title}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{review}</td>
           

           
        </tr>


    );
};

export default ReviewRow;