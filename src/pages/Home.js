import React from 'react';
import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const Home = () => {
  // Fetch cat fact using react-query with the object syntax
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  // Render data
  return (
    <div>
      <h1>Home</h1>
      <h1>Cat Fact: {data?.fact}</h1>
    </div>
  );
};

export default Home;
