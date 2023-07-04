// components
import NavDetails from "./component/NavDetails";
import Title from "./component/Title";
import Rating from "./component/Rating";
import Description from "./component/description";
import Photos from "./component/Photos";
import Reviews from "./component/Reviews";
import ReservationBox from "./component/ReservationBox(c)";
import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";

// Sass
// import styles from "./../styles/page.module.scss";

const prisma = new PrismaClient();
export interface CardType {
  id: number;
  name: string;
  description: string | null;
  images: string[];
  slug: string;
  main_image: string;
  reviews: Review[];
  open_time: string;
  close_time: string;
}

async function restaurantDetailPage({ params }: { params: { slug: string } }) {
  const FetchRestaurantBySlug = async (slug: string): Promise<CardType> => {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        name: true,
        description: true,
        images: true,
        slug: true,
        main_image: true,
        reviews: true,
        open_time: true,
        close_time: true,
      },
    });
    if (!restaurant) {
      notFound();
    }
    return restaurant;
  };
  const restaurant = await FetchRestaurantBySlug(params.slug);
  

  return (
    <>
      <div className="h-96  flex overflow-hidden">
        <img
          className="h-full w-full bg-center items-center bg-cover flex justify-center"
          src={restaurant.main_image}
        />
      </div>
      <div className="flex w-[70%] m-auto justify-between items-start -mt-11">
        <div className="flex-col w-[70%] bg-white rounded  p-3 shadow">
          <NavDetails params={params} />
          <Title name={restaurant.name} />
          <Rating reviews={restaurant.reviews} />
          <Description description={restaurant.description} />
          <Photos restaurant={restaurant} />
          <Reviews reviews={restaurant.reviews} />
        </div>
        {/* Reservation */}
        <ReservationBox
          openTime={restaurant.open_time}
          closeTime={restaurant.close_time}
          slug={restaurant.slug}
        />
        {/* Reservation */}
      </div>
    </>
  );
}

export default restaurantDetailPage;
