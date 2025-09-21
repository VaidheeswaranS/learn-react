import React from "react";
import { THANK_YOU_IMAGE } from "../utils/constants";

const Thanks = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md text-center">
        <img
          src={THANK_YOU_IMAGE}
          alt="Thank You"
          className="mx-auto w-2/3 mb-6 rounded-md"
        />
        <h1 className="text-4xl font-bold text-green-600 mb-6">
          Your order has been placed successfully!
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          We appreciate your purchase and hope you enjoy your meal!
        </p>
        <p className="text-lg text-gray-700">
          If you have any questions or need further assistance, please feel free
          to contact our customer support.
        </p>
      </div>
    </div>
  );
};

export default Thanks;
