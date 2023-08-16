import Link from "next/link";
import { RestaurantCardSearch } from "../page";
import PriceBadge from "../../component/PirceBadge";
import Stars from "../../component/Stars";

function RestaurantCard({ restaurant }: { restaurant: RestaurantCardSearch }) {
  const averate = () => {
    if(restaurant.reviews.length === 0) return "No Review" 
    const sum = restaurant.reviews.reduce((total, review) => {
      return total + review.rating;
    }, 0);
    const average = sum / restaurant.reviews.length;
    if (average > 4) return `Awesome`;
    else if (average > 3 && average <= 4) return `Good`;
    else if (average <= 3) return `Average`;
    
  };

  return (
    <div className="border-b flex pb-5">
      <img
        src={restaurant.main_image}
        alt=""
        className="sm:w-52 sm:h-40 w-40 h-32 rounded transition transform duration-200 hover:scale-110"
      />
      <div className="pl-5">
        <h2 className="sm:text-3xl text-2xl  font-semibold mb-2">{restaurant.name}</h2>
        <div className="flex items-center">
        <Stars reviews ={restaurant.reviews}/>
          <p className="ml-2 text-sm">{averate()}</p>
        </div>
        <div className="sm:mb-9 mb-6 mt-2">
          <div className="font-light flex text-reg">
            <PriceBadge price={restaurant.price} />
            <p className="mr-4">{restaurant.cuisine.name}</p>
            <p className="mr-4">{restaurant.location.name}</p>
          </div>
        </div>
        <div>
          <Link
            className="text-red-600 border text-sm sm:text-base border-red-500 p-2 rounded hover:bg-red-500 hover:text-white hover:duration-400"
            href={`/restaurant/${restaurant.slug}`}
          >
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
