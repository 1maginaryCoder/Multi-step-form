export default function PersonalInfo({ userData, setUserData, page, setPage }) {
  const handleNextClick = (e) => {
    e.preventDefault();
    setPage(1);
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl md:text-2xl font-bold"> Personal info</h1>
      <p className="text-gray-400 md:text-sm text-lg my-4">
        {" "}
        Please provide your name, email address and phone number.
      </p>
      <div className="my-3">
        <label className="text-green-900 md:text-xs text-base"> Name </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border block rounded-md h-10 w-full"
        />
      </div>
      <div className="my-3">
        <label className="text-green-900 md:text-xs text-base">
          {" "}
          Email Address{" "}
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="border block rounded-md h-10 w-full"
        />
      </div>
      <div className="my-3">
        <label className="text-green-900 md:text-xs text-base">
          {" "}
          Phone Number{" "}
        </label>
        <input
          type="text"
          name="phnNum"
          id="phnNum"
          className="border block rounded-md h-10 w-full"
        />
      </div>
      <button
        className="bg-cyan-900 text-white py-2 px-3 rounded-md float-right mt-16"
        onClick={handleNextClick}
      >
        {" "}
        Next Step{" "}
      </button>
    </div>
  );
}
