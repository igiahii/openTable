function Form() {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded outline-none  focus:border-red-600  p-3 w-80 mb-4"
        placeholder="First name"
      />
      <input
        type="text"
        className="border rounded outline-none  focus:border-red-600 p-3 w-80 mb-4"
        placeholder="Last name"
      />
      <input
        type="number"
        className="border rounded outline-none  focus:border-red-600 p-3 w-80 mb-4"
        placeholder="Phone number"
      />
      <input
        type="email"
        className="border rounded outline-none  focus:border-red-600 p-3 w-80 mb-4"
        placeholder="Email"
      />
      <input
        type="text"
        className="border rounded outline-none  focus:border-red-600 p-3 w-80 mb-4"
        placeholder="Occasion (optional)"
      />
      <input
        type="text"
        className="border rounded outline-none  focus:border-red-600 p-3 w-80 mb-4"
        placeholder="Requests (optional)"
      />
      <button className="bg-[#da3743] w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
        Complete reservation
      </button>
      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  );
}

export default Form;
