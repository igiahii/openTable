function Title({name} : {name:string}) {
  return (
    <div className=" mt-5 pb-7 border-b">
      <h1 className="sm:text-5xl text-3xl capitalize font-bold ">
        {name}
      </h1>
    </div>
  );
}

export default Title;
