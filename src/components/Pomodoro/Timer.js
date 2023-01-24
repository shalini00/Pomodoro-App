import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Tasks from "../Tasks/Tasks";
import './Timer.css'


function Timer() {


    const time = useSelector(state => state.timer);

    //State variables defined for timer
    const [secondsLeft, setSecondsLeft] = useState(time.pomodoroMin * 60);
    const [mode, setMode] = useState('pomodoro')
    const [isPaused, setIsPaused] = useState(true);
    const [count, setCount] = useState(0)


    //switching the mode from pomodoro to shortbreak or longbreak
    //count is used for executing longbreakTimer after 4 intervals
    function switchMode() {
        if (count < 4) {
            const nextMode = mode === 'pomodoro' ? 'short-break' : 'pomodoro'
            const nextSeconds = (nextMode === 'pomodoro' ? time.pomodoroMin : time.shortBreakMin) * 60;


            setMode(nextMode);
            setSecondsLeft(nextSeconds);
            setCount(prev => prev + 1);

        } else {
            setSecondsLeft(time.longBreakMin * 60)
            setCount(0);
        }




    }


    //function for Starting the timer
    function startTimer() {
        setSecondsLeft(prev => prev - 1);
    }


    //To handle start stop of timer
    const clickHandler = () => {
        setIsPaused(prev => !prev);
    }


    //starting the timer based on the dependencies
    useEffect(() => {

        const timer = setInterval(() => {

            if (!isPaused && secondsLeft !== 0) {
                return startTimer();
            }
            if (secondsLeft === 0) {
                return switchMode();
            }


        }, 1000)


        return () => clearInterval(timer);

    }, [time, isPaused, secondsLeft]);


    //assigning values for time
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;

    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;



    return (
        <>
            <div className="timer-container">
                <div className="options">
                    
                    <button onClick={() => {setSecondsLeft(time.pomodoroMin * 60); setIsPaused(true)}}>Pomodoro</button>
                    <button onClick={() => {setSecondsLeft(time.shortBreakMin * 60); setIsPaused(true)}}>Short Break</button>
                    <button onClick={() => {setSecondsLeft(time.longBreakMin * 60); setIsPaused(true)}}>Long Break</button>


                </div>

                <div className="timer">
                    <p>{minutes} : {seconds}</p>
                </div>
                <div className="buttons">

                    <button className='button' onClick={clickHandler}>
                        {isPaused ? 'Start' : 'Stop'}
                    </button>
                </div>

            </div>


            <div className="task-container">
                <Tasks />
            </div>


        </>
    );
}

export default Timer;
