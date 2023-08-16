"use client";
import { useRouter } from "next/navigation";
import { RestaurantType } from "../page";
import PriceBadge from "./PirceBadge";
import Stars from "./Stars";

interface PropType {
  restaurant: RestaurantType;
}

function RestaurantCard({ restaurant }: PropType) {
  const today = new Date();
  const yesterday = new Date(today);
  const tomorrow = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  tomorrow.setDate(today.getDate() + 1);
  let count: number = 0;
  restaurant.bookings.map((booking) => {
    if (
      booking.created_at.toISOString() > yesterday.toISOString() &&
      booking.created_at.toISOString() <= tomorrow.toISOString()
    ) {
      count++;
    }
  });

  const router = useRouter();
  return (
    <div className="sm:w-60 w-72 h-[310px] m-2 transition-transform hover:-translate-y-1 duration-300 shadow-lg hover:shadow-xl rounded overflow-hidden border ">
      <img
        src={restaurant.main_image}
        alt="Hard Rock Cafe - Amsterdam"
        className="h-36 w-full overflow-hidden transition transform duration-200 hover:scale-110"
      />
      <div className="flex p-2 pb-0 ">
        <h3 className="text-left text-xl font-bold">{restaurant.name}</h3>
      </div>
      <div className="flex ml-2 flex-start ">
        <Stars reviews={restaurant.reviews} />
        <p className=" ml-2 ">
          {restaurant.reviews.length} review
          {restaurant.reviews.length > 1 ? "s" : ""}
        </p>
      </div>
      <div className="text-sm ml-2 mb-1 flex font-normal capitalize">
        <p className="mr-3">{restaurant.cuisine.name}</p>
        <PriceBadge price={restaurant.price} />
        <p className="mr-3">{restaurant.location.name}</p>
      </div>
      <button
        onClick={() => router.push("/restaurant/" + restaurant.slug)}
        className=" ml-5 rounded capitalize text-[#2d333f] border-solid border-2 font-semibold  border-gray-300 hover:border-[#da3743] hover:border-2 mt-2 w-[80%] p-1 "
      >
        order now
      </button>
      <p className="ml-2 text-sm  mt-2 font-bold capitalize">
        ↪️ booked {count} time{count <= 1 ? "" : "s"} today
      </p>
    </div>
  );
}

export default RestaurantCard;
