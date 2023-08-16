import Header from "./component/Header";
import SearchSideBar from "./component/SearchSideBar";
import RestaurantCard from "./component/RestaurantCard";
import { Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client";
// import styles from "./../styles/page.module.scss";

export interface RestaurantCardSearch {
  id: number;
  name: any;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  main_image: string;
  slug: string;
  reviews : Review[]
}

interface iSearchParams {
  query?: string;
  cuisine?: string;
  price?: PRICE;
}
const prisma = new PrismaClient();

const FetchData = async (searchParams: iSearchParams): Promise<RestaurantCardSearch[]> => {
  const select = {
    id: true,
    name: true,
    price: true,
    cuisine: true,
    location: true,
    main_image: true,
    slug: true,
    reviews : true
  };

  let where: any = {};

  if (searchParams.query) {
    const location ={
      name : {
        equals : searchParams.query.toLowerCase()
      }
    }
     where.location = location
  }
  if (searchParams.cuisine) {
    const cuisine ={
      name : {
        equals : searchParams.cuisine.toLowerCase()
      }
    }
     where.cuisine = cuisine
  }
  if (searchParams.price) {
    const price ={
        equals : searchParams.price
    }
     where.price = price
  }

  // if (!query) return prisma.restaurant.findMany({ select });
  const restaurants = await prisma.restaurant.findMany({
    where,
    // where : {
    //   OR :[
    //     {
    //       location :{
    //         name : {
    //           equals :query
    //         }
    //       }
    //     },
    //     {
    //       cuisine :{
    //         name : {
    //           equals : query
    //         }
    //       }
    //     },
    //     {
    //       name :{
    //         contains : query
    //       }
    //     }

    //   ]
    // },

    select
  });
  return restaurants;
};

const FetchLocation = (): Promise<Location[]> => {
  return prisma.location.findMany();
};

const FetchCuisine = (): Promise<Cuisine[]> => {
  return prisma.cuisine.findMany();
};

async function searchPage({
  searchParams,
}: {
  searchParams: { query?: string; cuisine?: string; price?: PRICE };
}) {
  let restaurants = await FetchData(searchParams);
  let Locations = await FetchLocation();
  let Cuisine = await FetchCuisine();
  // let filteredLoc = restaurants.filter(
  //   (restaurant) =>
  //     restaurant.location.name === searchParams.query.toLowerCase()
  // );
  // let filteredCuisine = restaurants.filter(
  //   (restaurant) => restaurant.cuisine.name === searchParams.query.toLowerCase()
  // );
  // let filteredName = restaurants.filter((restaurant) =>
  //   restaurant.name
  //     .toLowerCase()
  //     .replace(/\s+/g, "")
  //     .startsWith(searchParams.query.toLowerCase().replace(/\s+/g, ""))
  // );
  // let filtered = Object.assign(filteredLoc, filteredCuisine, filteredName);

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto sm:w-2/3 justify-between items-start">
        <SearchSideBar
          locations={Locations}
          cuisines={Cuisine}
          searchParams={searchParams}
        />
        <div className="sm:w-5/6 p-1">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p className="text-lg font-bold mt-10">
              😦 Sorry, We could not find any Restaurant !
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default searchPage;
