export default function SelectPlan({ userData, setUserData, page, setPage }) {
  const handleBackClick = (e) => {
    e.preventDefault();
    setPage(0);
  };
  const handleNextClick = (e) => {
    e.preventDefault();
    setPage(2);
  };
  return (
    <div>
      <h1> Select your plan </h1>
      <p> You have the option of monthly or yearly billing. </p>
      <div>
        <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="planType" />
          <div className="flex md:flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <g fill="none" fill-rule="evenodd">
                <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
                <path
                  fill="#FFF"
                  fill-rule="nonzero"
                  d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
                />
              </g>
            </svg>
            <div>
              <h2> Arcade </h2>
              <p> $9/mo </p>
            </div>
          </div>
        </label>
        <label />
        <label />
        {/* {console.log(userData)} */}
        {/* <div onClick={() => setUserData({...userData, plan: {...userData.plan, paymentPeriod: {...userData.plan.paymentPeriod, monthly=true}}})>
          {console.log(userData)}Toggle
        </div> */}
        <div>
          <button onClick={handleBackClick}> Go Back </button>
          <button onClick={handleNextClick}> Next Step </button>
        </div>
      </div>
    </div>
  );
}
