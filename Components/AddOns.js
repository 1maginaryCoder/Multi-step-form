export default function AddOns({ userData, setUserData, page, setPage }) {
  const handleBackClick = (e) => {
    e.preventDefault();
    setPage(1);
  };
  const handleNextClick = (e) => {
    e.preventDefault();
    setPage(3);
  };
  return (
    <div>
      <h1>Pick add-ons </h1>
      <p> Add-ons enhance your gaming experience. </p>
      <ul>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="9"
            viewBox="0 0 12 9"
          >
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              d="m1 4 3.433 3.433L10.866 1"
            />
          </svg>
          <div>center</div>
          <h3> +1$/mo </h3>
        </li>
      </ul>
      <div>
        <button onClick={handleBackClick}> Go Back </button>
        <button onClick={handleNextClick}> Next Step </button>
      </div>
    </div>
  );
}
