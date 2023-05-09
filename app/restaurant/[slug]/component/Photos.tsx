function Photos() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">5 Photos</h1>
      <div className="flex flex-wrap">
        <img
          className="w-56 h-44 rounded mr-1 mb-1 transition transform hover:scale-105"
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/26242152.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 rounded mr-1 mb-1 transition transform hover:scale-105"
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/26259658.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 rounded mr-1 mb-1 transition transform hover:scale-105"
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/27291999.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 rounded mr-1 mb-1 transition transform hover:scale-105"
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/47482170.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 rounded mr-1 mb-1 transition transform hover:scale-105"
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/26443972.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Photos;
