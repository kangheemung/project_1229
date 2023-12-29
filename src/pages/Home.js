import React from 'react';
import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Button from 'react-bootstrap/Button';
export const Home = () => {

  // Fetch cat fact using react-query with the object syntax
  const {
    data: catData,
    isLoading,
    isError,
    error ,
    refetch,
    } = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });
if (isError) {
    return <h1> Sorry, there was an error:{error.message}</h1>;
}
  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  // Render data
  const handleClick = () => {
    refetch();
  };

  return (
    <div>
      <h1>Home</h1>
      <h1>Cat Fact: {catData?.fact}</h1>
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={handleClick}>
        {isLoading ? 'Loading…' : 'Click to load'}
      </Button>
    </div>
  );
};

export default Home;
