import '../styles/Intro.css';
import { TypeAnimation } from 'react-type-animation';

function Intro() {
    return (
        <div>
            <TypeAnimation className='intro-text' sequence={['Welcome to your day in the life of a software engineer! Your day begins with a hearty breakfast and your first task ->', 1000]} speed={30}></TypeAnimation>
        </div>
    );
}

export default Intro;