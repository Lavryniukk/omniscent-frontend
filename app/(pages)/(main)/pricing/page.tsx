import PricingCostSelector from "./ui/PricingCostSelector";

export default function Pricing() {
  return (
    <>
      <section className=" max-w-7xl w-full items-center gap-20  flex flex-col justify-between py-20 mt-20">
        <div className="flex justify-between gap-20 max-md:flex-col">
          <div className="pricing-description-card">
            <h2>What are credits? How to use them?</h2>
            <p>
              Credits are a currency that you can use to access our learning
              services. We give you free 50 credits to start with. For example:
              roadmap generation costs 30 credits, and 1 lesson - 3 credits.
            </p>
          </div>
          <div className="pricing-description-card">
            <h2>What do i pay for?</h2>
            <p>
              You pay for custom learning experiences that are tailored to your
              needs. You pay for private mentor-teacher, that will help you to
              learn faster and answer all your questions.
            </p>
          </div>
        </div>
        <div className="pricing-description-card">
          <h2>Why do i have to pay?</h2>
          <p>
            Our services use high-quality AI to give you the best learning
            tools. This costs us money, so we ask you to pay for using these
            advanced features. It`s all about giving you a top-notch learning
            experience.
          </p>
        </div>
      </section>

      <PricingCostSelector />
      <section className="w-full max-w-7xl h-fit my-10 px-5 flex flex-col gap-10 items-center justify-center ">
        <h2 className="text-2xl font-bold">Cost table</h2>
        <table className=" cost-table max-md:hidden">
          <thead>
            <tr>
              <th></th>
              <th>Generate roadmap</th>
              <th>Complete lesson</th>
              <th>Complete quiz</th>
              <th>Ask question</th>
              <th>Copy template</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Credits</th>
              <td>30</td>
              <td>2</td>
              <td>1</td>
              <td>2</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
        <table className="cost-table md:hidden">
          <thead>
            <tr>
              <th></th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Generate roadmap</th>
              <td>30 credits</td>
            </tr>
            <tr>
              <th>Complete lesson</th>
              <td>2 credits</td>
            </tr>
            <tr>
              <th>Complete quiz</th>
              <td>1 credit</td>
            </tr>
            <tr>
              <th>Ask question</th>
              <td>2 credits</td>
            </tr>
            <tr>
              <th>Copy template</th>
              <td>10 credits</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
