function CareerButton({title, imageUrl})
{
   return(
      <div className="card-container">
         <div className="image-container">
            <img src={imageUrl}></img>
         </div>
      </div>
   );
}

export default CareerButton;