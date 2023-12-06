import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useJob = () => {

    const axiosPublic = useAxiosPublic();
   

    const { data: job = [],isPending: loading, refetch } = useQuery({
        queryKey: ['job'],
        queryFn: async () => {
            const res = await axiosPublic.get('/jobs')
            return res.data;
        }
    })
    return [job, loading,refetch]
};

export default useJob;