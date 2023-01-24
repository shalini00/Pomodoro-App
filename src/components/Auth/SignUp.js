import {  useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../store/authActions';




const SignUp = () => {

    const apiKey = process.env.REACT_APP_POMODORO_API;
  
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const history = useHistory(); 

  const dispatch = useDispatch();
  const isSignedUp = useSelector(state => state.auth.isSignedUp);
  const isError = useSelector(state => state.auth.isError)
  const errorMessage = useSelector(state => state.auth.errorMessage)

  

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;


    //Checking whether passwords matched or not and then calling the function
    if (enteredPassword === enteredConfirmPassword){
        dispatch(signupUser({email: enteredEmail, password: enteredPassword, apiKey}))
    }else{
        alert("Password didn't match");
    }

  };


   //To navigate the user based on the whether signup successful or not
  useEffect(() => {

    if (isSignedUp) {
        history.push("/login")
    }

    if (isError) {
        alert(errorMessage);
    }
}, [isSignedUp, isError, errorMessage, history]);

 

  return (
    <section className='auth'>
      <h1>Sign Up</h1>
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
        <div className='control'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            required
            ref={confirmPasswordInputRef}
          />
        </div>
        <div className='actions'>
          
            <button >Create Account</button>
          



        </div>
      </form>
    </section>
  );
};

export default SignUp;
