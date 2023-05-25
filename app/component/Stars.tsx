import fullstar from "./../../public/icons/full-star.png"
import halfstar from "./../../public/icons/half-star.png"
import emptystar from "./../../public/icons/empty-star.png"
import { Review } from "@prisma/client"
import Image from "next/image"


function Stars({reviews ,rating} : {reviews : Review[] , rating? : number }) {
    const averate = () => {
        if(reviews.length === 0) return 0 
        const sum = reviews.reduce((total, review) => {
          return total + review.rating;
        }, 0);
        const average = sum / reviews.length;
        return average
    }
    const average = rating||averate()
    const ratingStars = (average : number) =>{
        let Stars =[]
        for (let i = 0; i < 5; i++) {
            const element = parseFloat(average.toFixed(1)) - i
            if(element >=1) Stars.push(fullstar)
            else if (element> 0 && element<1) {
                if(element >= 0.6) Stars.push(fullstar)
                else if(element>0.2 && element < 0.6) Stars.push(halfstar)
                else Stars.push(emptystar)
            }
            else Stars.push(emptystar)
        }
        return Stars.map(star =><Image src={star} alt="" className="w-4 h-4 mr-1" />)
    }








  return (
    <div className=" flex items-center">
        {ratingStars(average)}
    </div>
  )
}

export default Stars