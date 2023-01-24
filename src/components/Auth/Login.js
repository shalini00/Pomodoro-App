import { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {  loginUser } from '../../store/authActions';
import { useDispatch, useSelector } from 'react-redux';
import './Auth.css';


const Login = () => {

    const apiKey = process.env.REACT_APP_POMODORO_API;

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const dispatch = useDispatch();
    const history = useHistory();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const isError = useSelector(state => state.auth.isError)
    const errorMessage = useSelector(state => state.auth.errorMessage)


    const submitHandler = (event) => {
        event.preventDefault();

        //email and password b=values
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //Dispatching function once user submit the login form
        dispatch(loginUser({ email: enteredEmail, password: enteredPassword, apiKey }));



    };

  
    //To navigate the user based on the whether login successful or not
    useEffect(() => {

        if (isLoggedIn) {
            history.push("/")
        }

        if (isError) {
            alert(errorMessage);
        }
    }, [isLoggedIn, isError, errorMessage, history]);



    return (
        <section className='auth'>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div className='control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' required ref={emailInputRef} />
                </div>
                <div className='control'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={passwordInputRef}
                    />
                </div>
                <div className='actions'>

                    <button >Login</button>


                </div>
            </form>
        </section>
    );
};

export default Login;
