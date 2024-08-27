"use client";

import { useState } from "react";
import Input from "./Input";

export default function BillingSection() {
  const [error, setError] = useState(false);
  const [cvvError, setCvvError] = useState(false);

  const handleCVV = (e) => {
    setCvvError(false);
    if (e.target.value.length > 3) {
      setCvvError(true);
    }
  };

  return (
    <section className="py-12 mx-4">
      <div className="pb-8">
        <h1 className="font-medium text-2xl">Billing Information</h1>
        <p className="text-neutral-500">
          Update your billing details and address
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-lg font-medium">Payment details</p>
        <div className="flex flex-col gap-7">
          <Input
            title={"Card number"}
            inputVal={"1234 1234 1234 1234"}
            inputType={"number"}
          />
          <Input
            title={"Cardholder name"}
            inputVal={"Full name on card"}
            inputType={"number"}
          />
          <div className="flex gap-8">
            <div className="">
              <Input title={"Expiry"} inputVal={"MM/YY"} inputType={"number"} />
            </div>
            <div className="">
              <Input
                title={"CVV"}
                inputVal={"123"}
                inputType={"number"}
                func={handleCVV}
              />
              {cvvError && <p className="text-red-500">CVV format invalid</p>}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5"></hr>
      <div className="flex flex-col gap-5">
        <p className="">Email address</p>
        <div className="">
          <Input
            title={"Email"}
            inputVal={"user@example.com"}
            inputType={"email"}
          />
        </div>
      </div>
      <hr className="my-5"></hr>
      <div className="flex flex-col gap-5">
        <p className="">Address details</p>
        <Input
          title={"Country / Region"}
          disabled={true}
          inputVal={"United States"}
        />
        <div className="flex flex-col gap-2">
          <Input
            title={"Address"}
            inputVal={"Street address"}
            inputType={"text"}
          />
          <Input
            inputVal={"Apartment, suite, etc (optional)"}
            inputType={"text"}
          />
        </div>
        <div className="flex items-end gap-5">
          <Input title={"City"} inputVal={"City"} inputType={"text"} />
          <select
            className="bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 h-[42px]"
            name=""
            placeholde="State"
          >
            <option value="" className=""></option>
          </select>
          <Input title={"Zip"} inputVal={"Zip"} inputType={"number"} />
        </div>
      </div>
      <div className="flex justify-end pt-5">
        <button
          type="submit"
          className="bg-neutral-100 text-neutral-400 px-8 py-3 rounded cursor-not-allowed"
        >
          Save Changes
        </button>
      </div>
    </section>
  );
}
