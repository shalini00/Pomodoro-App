
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/auth-slice';
import "./Header.css";

const Header = () => {



    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);   //To render the options based on whether user is login or not

    const dispatch = useDispatch();
    const history = useHistory();

    
    const logoutHandler = () => {
        dispatch(logout());
        history.replace("/login");
    }


    return (
        <header className="header">
            <Link to="/">
                <div className="logo">PomoDoro</div>
            </Link>
            <nav>
                <ul>
                    {isLoggedIn
                        ? <li>
                            <Link to="/settings">Settings</Link>
                            <button onClick={logoutHandler} className='btn-logout'>Logout</button>

                        </li>
                        : <li>

                            <Link to="/login">Login</Link>
                        </li>
                    }
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>


                </ul>
            </nav>
        </header>
    );
};

export default Header;
