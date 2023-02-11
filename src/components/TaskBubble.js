import '../styles/TaskBubble.css';

function TaskBubble({task}) {
    return (
        <div className="task-bubble">
            <h1>{task}</h1>
        </div>
    );
}

export default TaskBubble;