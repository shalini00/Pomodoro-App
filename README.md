*** Functionality-
1. User needs to signup/login to use the pomodoro app
2. User can change the default timings from settings

/// Adding tasks functionality not working now, data getting stored into db but not visible in app  ///

*** External Libraries
1. React-Redux
2. Redux Toolkit
3. React-router-dom



*** Pages Description
1. auth-slice -> slice for auth handling
2. authActions -> handle authentication api requests 
3. timer-slice -> slice for timer and also for tasks
4. taskActions -> handle tasks data 
5. store/index.js -> main store
6. Layout -> for the app layout under this all are rendered
7. Header -> for Navbar
8. WelcomePage -> starting/default page of the app 
9. Timer ->  timer functionality
10. Settings -> timer setting functionality
11. Login/SignUp ->  login/signup page
