import Link from "next/link";
import { RestaurantCardSearch } from "../page";
import PriceBadge from "../../component/PirceBadge";

function RestaurantCard( {restaurant} : {restaurant : RestaurantCardSearch}) {
  return (
    <div className="border-b flex pb-5">
      <img
        src={restaurant.main_image}
        alt=""
        className="w-52 h-40 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl font-semibold">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <PriceBadge price = {restaurant.price}/>
            <p className="mr-4">{restaurant.cuisine.name}</p>
            <p className="mr-4">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
