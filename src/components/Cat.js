// Cat.js
import { useGetCat } from './useGetCat';
 // Including .js extension

export const Cat = () => {
    // Use the useGetCat hook here directly, as it's defined in the same file
    const { data, isCatLoading, refetchData } = useGetCat();

    if (isCatLoading) return <h1>Loading...</h1>;

    return (
        <div>
            <button onClick={refetchData}>Refetch</button>
            <h1>{data?.fact}</h1>
        </div>
    );
};