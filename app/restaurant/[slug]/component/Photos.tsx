import { CardType } from "../page";

function Photos({restaurant} : {restaurant : CardType}) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">{restaurant.images.length} Photos</h1>
      <div className="flex flex-wrap">
        {restaurant.images.map(image => <img
           className="w-56 h-44 rounded mr-1 mb-1 transition transform hover:scale-105"
           src={image}
           alt={restaurant.slug}
        />)}
      </div>
    </div>
  );
}

export default Photos;
