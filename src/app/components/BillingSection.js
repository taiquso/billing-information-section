"use client";

import { useState } from "react";
import "./Billing.css";

export default function BillingSection() {
  const [error, setError] = useState(false);
  const [cvvError, setCvvError] = useState(false);
  const [cardError, setCardError] = useState(false);

  const validateCardNumber = (number) => {
    number = number.replace(/\D/g, "");
    let sum = 0;
    let isEven = false;
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number.charAt(i), 10);
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
    return sum % 10 === 0;
  };

  return (
    <section className="py-12 mx-4 md:mx-10 md:py-20 lg:mx-32w">
      <div className="pb-8">
        <h1 className="font-medium text-2xl">Billing Information</h1>
        <p className="text-neutral-500">
          Update your billing details and address
        </p>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <p className="text-lg font-medium">Payment details</p>
        <div className="flex flex-col gap-7 md:w-2/3">
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <p className="">Card number</p>
              {cardError && <p className="text-red-500">Invalid card number</p>}
            </div>

            <input
              type="text"
              id="card"
              placeholder="1234 1234 1234 1234"
              className={`bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 `}
              maxLength="19"
              onChange={(e) => {
                setCardError(false);
                let value = e.target.value;
                value = value.replace(/\D/g, "");
                value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
                value = value.trim();
                e.target.value = value;
                if (value.length === 19) {
                  const isValid = validateCardNumber(value);
                  setCardError(!isValid);
                }
              }}
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <p className="">Cardholder name</p>
            <input
              type="text"
              placeholder="Full name on card"
              className={`bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 `}
            ></input>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 w-1/2">
              <p className="">Expiry</p>
              <input
                className="bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200"
                placeholder="MM/YY"
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length > 4) {
                    value = value.slice(0, 4);
                  }
                  if (value.length > 2) {
                    value = value.slice(0, 2) + "/" + value.slice(2);
                  }
                  e.target.value = value;
                }}
              ></input>
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <p className="">CVV</p>
              <input
                type="text"
                placeholder="123"
                maxLength="3"
                className={`bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 `}
                onChange={(e) => {
                  let value = e.target.value;
                  value = value.replace(/\D/g, "");
                  e.target.value = value;
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5"></hr>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <p className="">Email address</p>
        <div className="flex flex-col gap-2 md:w-2/3">
          <p className="">Email</p>
          <input
            type="number"
            placeholder="user@example.com"
            className={`bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 `}
          ></input>
        </div>
      </div>
      <hr className="my-5"></hr>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <p className="">Address details</p>
        <div className="flex flex-col gap-7 md:w-2/3">
          <div className="flex flex-col gap-2">
            <p className="">Country / Region</p>
            <input
              type="text"
              placeholder="United States"
              className={`bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 `}
              disabled={true}
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="">Address</p>
              <input
                type="text"
                placeholder="Street address"
                className={`bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 `}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Apartment, suite, etc (optional)"
                className={`bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 `}
              ></input>
            </div>
          </div>
          <div className="flex items-end gap-5">
            <div className="flex flex-col gap-2">
              <p className="">City</p>
              <input
                type="text"
                placeholder="City"
                className={`bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 `}
              ></input>
            </div>
            <select
              className="bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 h-[42px]"
              name=""
            >
              <option value="State" className="">
                State
              </option>
            </select>
            <div className="flex flex-col gap-2">
              <p className="">Zip</p>
              <input
                type="number"
                placeholder="123"
                className={`bg-neutral-100 rounded px-5 py-2 w-full placeholder:text-neutral-500 border border-neutral-200 `}
                maxLength={3}
                onChange={(e) => {
                  let value = e.target.value;
                  if (value.length > 3) {
                    value = value.slice(0, 3);
                  }
                  value = value.replace(/\D/g, "");
                  value = value.trim();
                  e.target.value = value;
                }}
              ></input>
            </div>
          </div>
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
