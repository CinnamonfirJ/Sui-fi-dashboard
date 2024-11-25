"use client";

import { createContext, useContext } from "react";

const AirtimeContext = createContext();

export const AirtimeProvider = ({ children }) => {
  const buyAirtime = async (data) => {
    const credentials = {
      apiKey: process.env.AFRICAS_TALKING_API_KEY,
      username: process.env.AFRICAS_TALKING_USERNAME,
    };

    const AfricasTalking = require("africastalking")(credentials);

    const airtime = AfricasTalking.AIRTIME;

    const phoneNumber = data.phoneNumber;
    const amount = data.amount;

    const options = {
      recipients: [
        {
          phoneNumber: phoneNumber,
          currencyCode: "NGN",
          amount: amount,
        },
      ],
    };

    airtime
      .send(options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        buyAirtime,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAirtime = () => useContext(AirtimeContext);
