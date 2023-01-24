import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../store/taskActions';
import './Tasks.css'
import TasksList from './TasksList';




const Tasks = () => {
  const [isAddingTask, setIsAddingTask] = useState(false);

  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.id)
  const tasks = useSelector(state => state.timer.tasks)
  const isTaskPresent = useSelector(state => state.timer.isTaskAdded);

  useEffect(() => {
      dispatch(getTasks(id))
  }, [dispatch, id])

  const startAddTaskHandler = () => {
    setIsAddingTask(true);
  };
  
  return (
    <div className='tasks'>
      <h2>Tasks</h2>
      {!isAddingTask && (
        <button className='task-btn' onClick={startAddTaskHandler}>
          Add Tasks
        </button>
      )}
      {isAddingTask && <TaskForm />}

      
     {/* {isTaskPresent && <TasksList tasks={tasks} />} */}
    
    </div>
  );
};

export default Tasks;
