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
            <div className='home'>Choose Path</div>
            <div className='jobGrid'>
                {objects.map(object => (
                    <CareerButton title={object.title} imageUrl={object.image}></CareerButton>
                ))} 
            </div>
        </div>
    );
}

export default Home;