import '../styles/SecondTask.css';
import '../components/TaskBubble';
import TaskBubble from '../components/TaskBubble';

function SecondTask() {
    return (
        <div>
            <TaskBubble task={"Your next task is..."}></TaskBubble>
        </div>

    );
}


export default SecondTask;