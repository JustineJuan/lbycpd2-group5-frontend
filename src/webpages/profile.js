import {useContext, useState, useEffect} from 'react';
import UserContext from './../components/UserContext';
import LoginNav from "./../components/LoginNav";
import axios from 'axios';

const Profile = () => {
    
    axios.defaults.headers.common = {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      };

    const {userLogin, setUsersLogin} = useContext(UserContext);
    const [currentUserData, setCurrentUserData] = useState("");
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get(`/users/${userLogin}`).then(res => console.log(res));
        setLoaded(true);
    }, [])



    if(!loaded) {
        return (
            <div>
                <h1>Loading profile...</h1>
            </div>
        )
    }

    return (
        <div>
            <LoginNav />
            
        </div>
    )
}

export default Profile;