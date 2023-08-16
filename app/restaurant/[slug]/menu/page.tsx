import { PrismaClient } from "@prisma/client";
import NavDetails from "../component/NavDetails";
import MenuCard from "./component/MenuCard";
import Title from "./component/Title";
// import styles from "./../styles/page.module.scss";
const prisma = new PrismaClient();

const FetchMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      main_image: true,
      items: true,
    },
  });
  if (!restaurant) {
    throw new Error();
  }
  return restaurant;
};

async function menuPage({ params }: { params: { slug: string } }) {
  const restaurant = await FetchMenu(params.slug);

  return (
    <>
      <div className={`sm:h-[340px] bg-center bg-fixed bg-cover bg-no-repeat`}>
        <img  className="h-full w-full" src={restaurant.main_image}/>
      </div>
      <div className="flex sm:w-[70%] w-[90%] m-auto justify-between items-start -mt-11">
 
          <div className="flex-col w-full bg-white rounded  p-3 shadow">
            <NavDetails params={params} />
            {/* menu */}
            <main className="bg-white mt-5">
              <div>
                <Title />
                {/* MENU CARD */}
                <div className="flex flex-wrap justify-between">
                  {restaurant.items.length > 0 ? (
                    restaurant.items.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))
                  ) : (
                    <p className="text-lg font-semibold  my-10">
                      There is no Menu in this Restaurant
                    </p>
                  )}
                </div>

                {/* MENU CARD */}
              </div>
            </main>
            {/* menu */}
          </div>
      </div>
    </>
  );
}

export default menuPage;
