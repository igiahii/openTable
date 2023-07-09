import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

export default function UseReservation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createReservation = async ({
    slug,
    partySize,
    date,
    selectedTime,
    bookerFirstname,
    bookerLastname ,
    bookerEmail ,
    bookerPhone ,
    bookerOccasion ,
    bookerRequest ,
    setDidBook
  }: {
    slug: string;
    partySize: string;
    date: string;
    selectedTime: string;
    bookerFirstname: string;
    bookerLastname :string;
    bookerEmail :string;
    bookerPhone :string;
    bookerOccasion :string;
    bookerRequest :string;
    setDidBook : Dispatch<SetStateAction<boolean>>
  }) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/restaurant/${slug}/reserve`,
        {
            bookerFirstname,
            bookerLastname ,
            bookerEmail ,
            bookerPhone ,
            bookerOccasion ,
            bookerRequest ,
        },
        {
          params: {
            partySize,
            date,
            selectedTime,
          },
        }
      );
      setLoading(false);
      setDidBook(true)
      return response.data  
        
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
  
    }
  };

  return {
    loading,
    error,
    createReservation,
  };
}
