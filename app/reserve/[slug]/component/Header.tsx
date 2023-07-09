import { format } from "date-fns";
import { Time, convertToDisplayTime } from "../../../../utils/convertToDisplayTime";

function Header({name , image , date , partySize} : {name : string ; image : string , date: string , partySize : string}) {

  const [day , time] = date.split("T")

  return (
    <div>
      <h3 className="font-bold text-xl">You're almost done!</h3>
      <div className="mt-5 flex">
        <img
          src={image}
          alt={name}
          className="w-auto h-32 rounded"
        />
        <div className="ml-4">
          <h1 className="text-4xl font-extrabold capitalize">
            {name}
          </h1>
          <div className="flex font-semibold mt-3">
            <p className="mr-6">{format(new Date(day) , "cccc, LLL d")}</p>
            <p className="mr-6">{convertToDisplayTime(time as Time)}</p>
            <p className="mr-6">{partySize} {parseInt(partySize) === 1 ? "person" : "people"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
