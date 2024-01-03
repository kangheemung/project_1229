import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

// ... existing imports

export const useGetCat = () => {
    const { data: catData,
           refetch,
           isLoading: isCatLoading,
           error } = useQuery({
        queryKey: ['cat'],
        queryFn: async () => {
            return Axios.get("https://catfact.ninja/fact")
                .then((res) => res.data);
        },
    });

    const refetchData = () => {
        alert("DATA REFETCHED");
        refetch();
    };

    // Return 'catData' instead of 'data'
    return { catData, refetchData, isCatLoading, error };
};
