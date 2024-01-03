import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

// ... existing imports

export const useGetCat = () => {
    const {
         data,
         refetch,
         isLoading: isCatLoading,
         error,
         } = useQuery(["cat"], async () => {
            return Axios.get("https://catfact.ninja/fact")
                .then((res) => res.data);
    });
   const refetchData = () => {
     alert("DATA REFETCHED");
     refetch();
    };
    if (error){

    }
    return { data, refetchData, isCatLoading ,error};
};