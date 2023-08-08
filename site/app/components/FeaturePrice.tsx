const FeaturePrice = ({price}: {price: number}) => {
  return (
    <>
      {
        <div className="flex justify-end">
          <div className="z-10 py-2 px-3 text-xs bg-green-500 absolute text-center text-gray-900 font-bold uppercase leading-tight tracking-normal shadow-lg">
            {price === 0 ? 'FREE' : `$${price}`}
          </div>
        </div>
      }
    </>
  );
};

export default FeaturePrice;