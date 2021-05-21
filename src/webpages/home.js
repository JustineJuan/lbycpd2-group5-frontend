import { useContext } from "react";
import UserContext from "./../components/UserContext"

const Home = () => {
    const {userLogin, setuserLogin} = useContext(UserContext);
    return(
        <div>
            <p>{userLogin}</p>
        </div>
    )
}

export default Home;