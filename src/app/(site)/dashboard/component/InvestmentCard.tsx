

const InvestmentPlans: InvestmentPlanT[] =[
    {id: 1, name: 'Basic', minDeposit: 20,  rate: '10%', },
    {id: 2, name: 'Standard', minDeposit: 100, rate: '15%' },
    {id: 3, name: 'Premium', minDeposit: 500, rate: '20%' },
    {id: 4, name: 'Enterprise', minDeposit: 1000, rate: '25%' },
]


export default function InvestmentCard() {
  return (
    <div className="bg-lightColor rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-semibold text-textColor mb-4">Investment Plans</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {InvestmentPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-lightColor p-4 rounded-md shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-textColor text-lg mb-2">
              {plan.name}
            </h3>
            <p className="text-sm text-textColor">
              Min Deposit: ${plan.minDeposit}
            </p>
            <p className="text-sm text-textColor">Returns: {plan.rate}</p>
            <button className="mt-4 w-full bg-gradient-to-r from-primaryColor to-secondaryColor text-lightColor font-medium py-2 rounded-md hover:opacity-90 transition">
              Invest Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

