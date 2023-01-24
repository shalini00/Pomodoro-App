import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTasks } from '../../store/taskActions';



const TaskForm = (props) => {
  const enteredTaskRef = useRef();
  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.id)

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredTask = enteredTaskRef.current.value;

    dispatch(addTasks({ enteredTask, id}));

   
  };

  return (
    <form className='task-form' onSubmit={submitFormHandler}>
      <div className='task-form-control' onSubmit={submitFormHandler}>
        
        <input  type='text' name='task'  ref={enteredTaskRef}></input>
      </div>
      
      <div className='task-actions'>
        <button className='btn'>Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
