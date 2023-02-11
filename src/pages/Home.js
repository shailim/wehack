import '../styles/Home.css';
import CareerButton from '../components/CareerButton'

let objects = [
    {
        title: "Researcher",
        image: "/researcher.png"
    },
    {
        title: "Programmer",
        image: "/coder.png"
    },
    {
        title: "Civil Engineer",
        image: "/engineer.png"
    },
    {
        title: "Astronaut",
        image: "/astronaut.png"
    }
]
function Home() {
    return (
        <div className='body'>
            <div>Home Page</div>
            <div className='jobGrid'>
                {titles.map(title => (
                    <CareerButton text={title} imageUrl={'/coder.png'}></CareerButton>
                ))} </div>
>>>>>>> Stashed changes
        </div>
    );
}

export default Home;