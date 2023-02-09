import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import {signOut} from "firebase/auth"

export const Navbar = () => {

  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  }

    return (
      <div className="navbar">
        <div className="links">
          {" "}
          <Link to="/"> Home </Link>
          {!user ? (
            <Link to="/Login"> Login </Link>
          ) : (
            <Link to="/createpost"> Create Post </Link>
          )}
        </div>

        {user && (
          <>
            <div className="user">
              <p className="user">{user?.displayName}</p>
              <img src={user?.photoURL || ""} width="40" height="40" alt="me" />
              <button onClick={signUserOut}>Log out</button>
            </div>
          </>
        )}
      </div>
    );
};
