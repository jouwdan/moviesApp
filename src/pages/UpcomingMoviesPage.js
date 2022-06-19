import React, { useState, useEffect } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getUpcomingMovies)

  const addToFavourites = () => null;

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;