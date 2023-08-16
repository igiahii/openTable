// components
import NavDetails from "./component/NavDetails";
import Title from "./component/Title";
import Rating from "./component/Rating";
import Description from "./component/description";
import Photos from "./component/Photos";
import Reviews from "./component/Reviews";
import ReservationBox from "./component/ReservationBox(c)";
import ReservationBoxMob from "./component/ReservationBox(mobile)";
import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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
// const isMobile = useMediaQuery("(max-width: 640px)");


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
export async function generateMetadata({ params }: { params: { slug: string } }) : Promise<Metadata> {
  const restaurant = await FetchRestaurantBySlug(params.slug)
  if(!restaurant) return{
    title : 'Not Found',
    description : 'the restaurant is not found'
  } 
  return {
    title : restaurant.name ,
    description : restaurant.description ,
    keywords : [restaurant.slug] ,
    alternates : {
      canonical : `/restaurant/${restaurant.slug}`
    }
  }
}

async function restaurantDetailPage({ params }: { params: { slug: string } }) {
  const restaurant = await FetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className={`sm:h-[340px] bg-center bg-fixed bg-cover bg-no-repeat`}>
        <img
          className="h-full w-full"
          src={restaurant.main_image}
          alt={restaurant.slug}
        />
      </div>
      <div className="flex sm:w-[70%] w-[90%] m-auto justify-between items-start -mt-11">
        <div className="flex-col sm:w-[70%] w-full bg-white rounded  p-3 shadow">
          <NavDetails params={params} />
          <Title name={restaurant.name} />
          <Rating reviews={restaurant.reviews} />
          <Description description={restaurant.description} />
          <ReservationBoxMob
            openTime={restaurant.open_time}
            closeTime={restaurant.close_time}
            slug={restaurant.slug}
          />
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
