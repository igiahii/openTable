import Header from "./component/Header";
import Form from "./component/Form";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
// import styles from "./../styles/page.module.scss";

const prisma = new PrismaClient();
const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      main_image: true,
      name: true,
    },
  });
  if (!restaurant) {
    notFound();
  }
  return restaurant;
};

async function reservePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { date: string; partySize: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <div className="border-t flex max-h-screen ">
      <div className="py-9 w-[90%] sm:w-3/5 m-auto">
        <Header name={restaurant.name} image={restaurant.main_image} date ={searchParams.date} partySize ={searchParams.partySize}/>
        <Form slug={params.slug} date ={searchParams.date} partySize ={searchParams.partySize} />
      </div>
    </div>
  );
}

export default reservePage;
