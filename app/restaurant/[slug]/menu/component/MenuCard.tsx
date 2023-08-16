import { MenuItem } from "@prisma/client";

function MenuCard({item} : {item : MenuItem}) {
  return (
    <div className=" shadow border rounded hover:border-[#da3743] p-3 sm:w-[49%] my-3">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="font-light mt-1 text-sm">
        {item.description}
      </p>
      <p className="mt-7">{item.price}</p>
    </div>
  );
}

export default MenuCard;
