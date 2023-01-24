import React from 'react';
import { timerActions } from '../../store/timer-slice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Settings.css';

function Settings(props) {

    const dispatch = useDispatch();
    const time = useSelector(state => state.timer);

    const history = useHistory();

    const submitHandler = (e) => {
       e.preventDefault();
       history.replace('/');

    }

    const cancelHandler = () => {
        history.replace('/');

    }

    return (
        <form className='settings-container' onSubmit={submitHandler}>
            <div className='settings-options'>
                <label htmlFor='email'>Pomodoro :</label>
                <input type='number' id='number' value={time.pomodoroMin} onChange={(e) => dispatch(timerActions.setPomodoroMin(e.target.value))}/>
            </div>
            <div className='settings-options'>
                <label htmlFor='email'>Short Break :</label>
                <input type='number' id='number' value={time.shortBreakMin} onChange={(e) => dispatch(timerActions.setShortBreakMin(e.target.value))}/>
            </div>
            <div className='settings-options'>
                <label htmlFor='email'>Long Break :</label>
                <input type='number' id='number' value={time.longBreakMin} onChange={(e) => dispatch(timerActions.setLongBreakMin(e.target.value))}/>
            </div>
            <div className='settings-actions'>

                <button type='submit' className='setting-button'>Apply</button>
                <button onClick={cancelHandler} className='setting-button'>Cancel</button>


            </div>
        </form>
    )
}

export default Settings
