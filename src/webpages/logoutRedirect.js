import { useEffect } from "react"
import { useHistory } from "react-router-dom";

const LogoutRedirect = () => {
    let history = useHistory();

    useEffect(() => {
        localStorage.clear();
        history.push("/");
    })
    return (
        <div>
            <p>Logging out...</p>
        </div>
    )
}

export default LogoutRedirect;