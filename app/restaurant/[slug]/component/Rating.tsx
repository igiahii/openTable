import { Review } from "@prisma/client";
import Stars from "../../../component/Stars";

function Rating({reviews} : {reviews : Review[]}) {
  const averate = () => {
    if(reviews.length === 0) return "No Review" 
    const sum = reviews.reduce((total, review) => {
      return total + review.rating;
    }, 0);
    const average = sum / reviews.length;
    return average.toFixed(1)
    
  };
  return (
    <div className="flex items-end font-sans">
      <div className="rating mt-3 flex font-medium item-center">
      <Stars reviews ={reviews}/>
        <p className="ml-3">{averate()}</p>
      </div>
      <div className="ml-4 font-medium">
        <p>💬 {reviews.length} review{(reviews.length > 1) ?"s" : ""}</p>
      </div>
    </div>
  );
}

export default Rating;
