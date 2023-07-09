"use client";

import { useEffect, useState } from "react";
import UseReservation from "../../../../hooks/useReservation";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";

function Form({
  slug,
  date,
  partySize,
}: {
  slug: string;
  date: string;
  partySize: string;
}) {
  const [day, time] = date.split("T");
  const [disabled, setDisabled] = useState(true);
  const [didBook, setDidBook] = useState(false);
  const [inputs, setInputs] = useState({
    bookerFirstname: "",
    bookerLastname: "",
    bookerEmail: "",
    bookerPhone: "",
    bookerOccasion: "",
    bookerRequest: "",
  });
  const InputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (
      inputs.bookerFirstname &&
      inputs.bookerLastname &&
      inputs.bookerEmail &&
      inputs.bookerPhone
    ) {
      return setDisabled(false);
    }
    setDisabled(true);
  }, [inputs]);

  const { error, loading, createReservation } = UseReservation();

  const handleCreateReservation = async () => {
    console.log(didBook , "before");
    const booking = await createReservation({
      slug,
      date: day,
      selectedTime: time,
      partySize,
      bookerFirstname: inputs.bookerFirstname,
      bookerLastname: inputs.bookerLastname,
      bookerEmail: inputs.bookerEmail,
      bookerPhone: inputs.bookerPhone,
      bookerOccasion: inputs.bookerOccasion,
      bookerRequest: inputs.bookerRequest,
      setDidBook,
    });
    console.log(didBook , "after");
    
  };

  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      {didBook ? (
        <div className="flex">
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            You are all Booked Up — <strong>Enjoy Your Reservation!</strong>
          </Alert>
        </div>
      ) : (
        <>
          <input
            type="text"
            className="border rounded outline-none  focus:border-red-600  p-3 w-80 mb-4"
            placeholder="First name"
            name="bookerFirstname"
            value={inputs.bookerFirstname}
            onChange={InputHandleChange}
          />
          <input
            type="text"
            className="border rounded outline-none  focus:border-red-600 p-3 w-80 mb-4"
            placeholder="Last name"
            name="bookerLastname"
            value={inputs.bookerLastname}
            onChange={InputHandleChange}
          />
          <input
            type="text"
            className="border rounded outline-none  focus:border-red-600 p-3 w-80 mb-4"
            placeholder="Phone number"
            name="bookerPhone"
            value={inputs.bookerPhone}
            onChange={InputHandleChange}
          />
          <input
            type="email"
            className="border rounded outline-none  focus:border-red-600 p-3 w-80 mb-4"
            placeholder="Email"
            name="bookerEmail"
            value={inputs.bookerEmail}
            onChange={InputHandleChange}
          />
          <input
            type="text"
            className="border rounded outline-none  focus:border-red-600 p-3 w-80 mb-4"
            placeholder="Occasion (optional)"
            name="bookerOccasion"
            value={inputs.bookerOccasion}
            onChange={InputHandleChange}
          />
          <input
            type="text"
            className="border rounded outline-none  focus:border-red-600 p-3 w-80 mb-4"
            placeholder="Requests (optional)"
            name="bookerRequest"
            value={inputs.bookerRequest}
            onChange={InputHandleChange}
          />
          <button
            onClick={handleCreateReservation}
            disabled={disabled || loading}
            className="bg-[#da3743] hover:bg-[#b8222d] w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
          >
            {loading ? (
              <CircularProgress size="21px" color="inherit" />
            ) : (
              "Complete Reservation"
            )}
          </button>
          <p className="mt-4 text-sm">
            By clicking “Complete reservation” you agree to the OpenTable Terms
            of Use and Privacy Policy. Standard text message rates may apply.
            You may opt out of receiving text messages at any time.
          </p>
        </>
      )}
    </div>
  );
}

export default Form;
