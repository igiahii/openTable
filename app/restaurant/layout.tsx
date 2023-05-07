

function RestaurantLayout({ 
    children
 }: { 
    children: React.ReactNode
 }) {
  return (
    <>
      <div className="h-96 flex overflow-hidden">
        <div className="h-full w-full bg-center items-center bg-[url('https://resizer.otstatic.com/v2/photos/wide-huge/1/25950712.jpg')] bg-cover flex justify-center"></div>
      </div>
      <div className="flex w-[70%] m-auto justify-between items-start -mt-11">
        {children}
      </div>
    </>
  );
}

export default RestaurantLayout;
