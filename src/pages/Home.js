import '../styles/Home.css';
import CareerButton from '../components/CareerButton'

let titles = ["Researcher", "Programmer", "Civil Engineer", "Astronaut"]
function Home() {
    return (
        <div className='body'>
            <h1>Choose Path</h1>
            <div className='grid_container'>
                {titles.map(title => (
                    <CareerButton title={title} imageUrl={'/coder.png'} ></CareerButton>
                ))} </div>
        </div>
    );
}

export default Home;