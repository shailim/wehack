import '../styles/Home.css';
import CareerButton from '../components/CareerButton'

let titles = ["Researcher", "Programmer", "Civil Engineer", "Astronaut"]
function Home() {
    return (
        <div className='body'>
            <div>Home Page</div>
            <div className='jobGrid'>
                {titles.map(title => (
                    <CareerButton text={title} imageUrl={'/coder.png'}></CareerButton>
                ))} </div>
        </div>
    );
}

export default Home;