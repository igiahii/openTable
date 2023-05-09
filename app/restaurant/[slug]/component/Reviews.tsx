function Reviews() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mt-10 mb-7 border-b pb-5">
          What 1235 people are saying
        </h1>
      </div>

      <div className="border-b mb-7 pb-7">
        <div className="flex">
          <div className="w-1/6 flex justify-center flex-col items-center">
            <div className="rounded-full flex justify-center items-center h-16 w-16 bg-blue-400">
              <h1 className="text-white item-center text-2xl font-semibold ">
                IG
              </h1>
            </div>
            <p className="font-bold text-center">Iman Giahi</p>
          </div>
          <div className="flex-col ml-10 w-5/6">
            <div className="flex items-center">
              <div className="flex mr-5">⭐⭐⭐</div>
            </div>
            <div className="mt-4">
              <p className="text-base font-light text-justify pr-2 ">
                Passage a paris. Très bien reçu. La table était prête avant
                l'heure. Le serveur était très sympa. L'ambiance et le repas
                étaient vraiment bon. Nous avons passé une excellente soirée
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b mb-7 pb-7">
        <div className="flex">
          <div className="w-1/6 flex justify-center flex-col items-center">
            <div className="rounded-full flex justify-center items-center h-16 w-16 bg-pink-600">
              <h1 className="text-white item-center text-2xl font-semibold ">
                PR
              </h1>
            </div>
            <p className="font-bold leading-5 mt-1 text-center">
              Paria Farahmand
            </p>
          </div>
          <div className="flex-col ml-10 w-5/6">
            <div className="flex items-center">
              <div className="flex mr-5">⭐⭐</div>
            </div>
            <div className="mt-4">
              <p className="text-base font-light text-justify pr-2 ">
                My last dinner wasn’t so excellent It’s always the same food no
                variety I booked for 8:45pm but when I arrived the table was
                still occupied I had to wait for 15min
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
