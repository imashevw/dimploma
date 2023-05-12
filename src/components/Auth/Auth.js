import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./Auth.css"

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
          <Link to="/orders"><img src={user.photoURL} alt={user.displayName} /></Link>
          <button className="sing" onClick={logOut}>Sign out</button>
        </span>
      ) : (
        <span>
          Hello guest!
          <button className="sing" onClick={logIn}>Sign in</button>
        </span>
      )}
    </div>
  );
}