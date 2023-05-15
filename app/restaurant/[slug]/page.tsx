// components
import NavDetails from "./component/NavDetails";
import Title from "./component/Title";
import Rating from "./component/Rating";
import Description from "./component/description";
import Photos from "./component/Photos";
import Reviews from "./component/Reviews";
import ReservationBox from "./component/ReservationBox(c)";
import { PrismaClient } from "@prisma/client";

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
      },
    });
    if (!restaurant) {
      throw new Error();
    }
    return restaurant;
  };
  const restaurant = await FetchRestaurantBySlug(params.slug);
  console.log(restaurant);

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
          <Rating />
          <Description description={restaurant.description} />
          <Photos restaurant={restaurant} />
          <Reviews />
        </div>
        {/* Reservation */}
        <ReservationBox />
        {/* Reservation */}
      </div>
    </>
  );
}

export default restaurantDetailPage;
