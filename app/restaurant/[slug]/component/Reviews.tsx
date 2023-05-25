import { Review } from "@prisma/client";
import Stars from "../../../component/Stars";

function Reviews( {reviews} : {reviews : Review[]}) {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mt-10 mb-7 border-b pb-5">
          What {reviews.length} people are saying
        </h1>
      </div>
    {reviews.map(review => <div key={review.id} className="border-b mb-7 pb-7">
        <div className="flex">
          <div className="w-1/6 flex justify-center flex-col items-center">
            <div className="rounded-full flex justify-center items-center h-16 w-16 bg-gray-400">
              <h1 className="text-white item-center text-2xl font-semibold ">
                {review.first_name.charAt(0)}
                {review.last_name.charAt(0)}
              </h1>
            </div>
            <p className="font-bold text-center">{review.first_name}{" "}{review.last_name}</p>
          </div>
          <div className="flex-col ml-10 w-5/6">
            <div className="flex items-center ">
              <Stars reviews={[]} rating={review.rating}/>
            </div>
            <div className="mt-4">
              <p className="text-base font-light text-justify pr-2 ">
               {review.text}
               </p>
            </div>
          </div>
        </div>
      </div>)}
      
    </>
  );
}

export default Reviews;
