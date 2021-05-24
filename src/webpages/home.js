import {useEffect} from "react";
import LoginNav from "./../components/LoginNav";
import HomeContent from "./../components/HomeContent";
import axios from "axios";

const Home = () => {
    
    axios.defaults.headers.common = {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      };
      
  return (
    <div>
      <LoginNav />
      <HomeContent />
    </div>
  );
};

export default Home;
