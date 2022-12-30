export default function Summary({ userData, setUserData, page, setPage }) {
  const handleChangePlan = (e) => {
    e.preventDefault();
    setPage(1);
  };
  const handleBackClick = (e) => {
    e.preventDefault();
    setPage(2);
  };
  return (
    <div>
      <h1> Finishing up </h1>
      <p> Double-check everything looks OK before confirming. </p>
      <div>
        <div className="flex justify-between">
          <div className="flex flex-row">
            {userData.plan.type}({userData.plan.paymentPeriod})
            <button onClick={handleChangePlan}> Change </button>
          </div>
          <h2> $9/mo </h2>
        </div>
        <div></div>
        <div></div>
      </div>
      {userData.name}
      {userData.email}
      {userData.phnNum}
      {userData.plan.type}
      {userData.plan.paymentPeriod}
      {userData.onlineService}
      {userData.largerStorage}
      {userData.CustomizabeProfile}
      <div className="flex justify-between">
        <button onClick={handleBackClick}> Go Back </button>
        <button type="submit"> Confirm </button>
      </div>
    </div>
  );
}
