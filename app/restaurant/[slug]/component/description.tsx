function description({description} : {description : string | null}) {
  return (
    <div className="mt-4 flex">
      <p className="font-medium text-justify pr-2 text-lg">
        {description}
      </p>
    </div>
  );
}

export default description;
