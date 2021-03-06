import { useState, useEffect, useRef } from "react";
import API from "../API";
//Helpers
import { isPersistedState } from "../helpers";

const inititalSate = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};
export const useHomeFetch = () => {
  const [isLoadinMore, setIsLoadingMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setstate] = useState(inititalSate);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(searchTerm);
  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setstate((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //Initial render and search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");

      if (sessionState) {
        console.log("Grabbing from storage");
        setstate(sessionState);
        return;
      }
    }

    console.log("Grabbing from API");
    setstate(inititalSate);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  //Load More

  useEffect(() => {
    if (!isLoadinMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadinMore, searchTerm, state.page]);

  //Write to session Storage

  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);
  return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore };
};
