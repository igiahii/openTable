function Rating() {
  return (
    <div className="flex items-end font-sans">
      <div className="rating mt-3 flex font-medium item-center">
        <p className="rating item-center flex">⭐⭐⭐⭐</p>
        <p className="ml-3">4.7</p>
      </div>
      <div className="ml-4 font-medium">
        <p>💬 6000 reviews</p>
      </div>
    </div>
  );
}

export default Rating;
