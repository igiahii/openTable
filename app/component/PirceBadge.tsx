import { PRICE } from "@prisma/client";

function PriceBadge({ price }: { price: PRICE }) {
  const Price = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <span className="text-green-500">$$</span>
          <span className="text-gray-400">$$</span>
        </>
      );
    } else if (price === PRICE.REGULAR) {
      return (
        <>
          <span className="text-orange-400">$$$</span>
          <span className="text-gray-400">$</span>
        </>
      );
    } else if (price === PRICE.EXPENSIVE) {
      return (
        <>
          <span className="text-red-500">$$$$</span>
      
        </>
      );
    }
  };

  return <p className="mr-3">{Price()}</p>;
}

export default PriceBadge;
