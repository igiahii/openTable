import { format } from "date-fns";
import { Time, convertToDisplayTime } from "../../../../utils/convertToDisplayTime";

function Header({name , image , date , partySize} : {name : string ; image : string , date: string , partySize : string}) {

  const [day , time] = date.split("T")

  return (
    <div className="flex flex-wrap sm:block justify-center  ">
      <h3 className="font-bold text-xl">You're almost done!</h3>
      <div className="mt-5 flex flex-wrap  justify-center sm:justify-start">
        <img
          src={image}
          alt={name}
          className="w-fit sm:h-32 rounded"
        />
        <div className="sm:ml-4 text-start w-full m-2 sm:w-auto sm:m-0">
          <h1 className="sm:text-4xl text-2xl font-extrabold capitalize ">
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
