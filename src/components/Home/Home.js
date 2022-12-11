import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchData from "../../redux/thunk/fetch/fetchData";
import About from "../About/About";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("api 1st step");
    dispatch(fetchData());
    // loadData('Swapon')
  }, [dispatch]);
  return (
    <div>
      <h1>Home page</h1>
      <About/>
    </div>
  );
};

export default Home;
