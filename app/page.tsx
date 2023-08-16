// import components
import { Booking, Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client";
import Header from "./component/Header";
import RestaurantCard from "./component/RestaurantCard";
// import dynamic from "next/dynamic";
// const RestaurantCard = dynamic(() => import('./component/RestaurantCard'))
// import styles from "./../styles/page.module.scss";

const Prisma = new PrismaClient();

export interface RestaurantType {
  id: number;
  name: string;
  main_image: string;
  location: Location;
  cuisine: Cuisine;
  price: PRICE;
  slug: string;
  reviews: Review[];
  bookings : Booking[]
}

const FetchRestaurant = async (): Promise<RestaurantType[]> => {
  const restaurants = await Prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      reviews: true,
      price: true,
      slug: true,
      bookings : true
    },
  });
  return restaurants;
};




export default async function Home() {
  const restaurants = await FetchRestaurant();
  
  
  return (
    <>
      <Header />
      {/* Cards */}
      <div className=" flex flex-wrap m-auto mt-5 py-3 justify-center sm:pl-36 sm:justify-start">
        {restaurants.map((restaurantCard) => (
          <RestaurantCard restaurant={restaurantCard}  />
        ))}
      </div>
      {/* Cards */}
    </>
  );
}
