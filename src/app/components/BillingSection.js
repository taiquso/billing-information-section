export default function BillingSection() {
  return (
    <>
      <section className="py-12 mx-4">
        <div className="">
          <h1 className="font-medium text-xl">Billing Information</h1>
          <p className="text-neutral-500">
            Update your billing details and address
          </p>
        </div>
        <div className="">
          <p className="">Payment detail</p>
          <div className="">
            <div className="">
              <p className="">Card number</p>
              <input type="number" placeholder="1234 1234 1234 1234"></input>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
