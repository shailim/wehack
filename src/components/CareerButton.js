import '../styles/CareerButton.css'

function CareerButton({title, imageUrl})
{
   return(
      <div onClick={() => {alert("Hello from here")}} className="card-container">
         <div className="image-container">
            <img src={imageUrl} alt='hi' />
         </div>
         <div className="card-title">
            <h3>{title}</h3>
         </div>
      </div>
   );
}

export default CareerButton;