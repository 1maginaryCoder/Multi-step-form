export default function NavCard({ page, setPage }) {
  const selectFirstPage = () => {
    setPage(0);
  };
  const selectSecondPage = () => {
    setPage(1);
  };
  const selectThirdPage = () => {
    setPage(2);
  };
  const selectFourthPage = () => {
    setPage(3);
  };
  return (
    <div className="p-6">
      <ul className="flex space-x-7 w-56 mx-auto">
        <li className="flex cursor-pointer" onClick={selectFirstPage}>
          <h1
            className={`border rounded-full cursor-pointer h-10 w-10 px-3.5 py-1.5 ${
              page == 0 && "bg-blue-200"
            }`}
          >
            1
          </h1>
          <div className="hidden md:block">
            <h2> Step 1 </h2>
            <h2> Your Info </h2>
          </div>
        </li>
        <li className="flex cursor-pointer" onClick={selectSecondPage}>
          <h1
            className={`border rounded-full cursor-pointer h-10 w-10 px-3.5 py-1.5 ${
              page == 1 && "bg-blue-200"
            }`}
          >
            {" "}
            2{" "}
          </h1>
          <div className="hidden md:block">
            <h2> Step 2 </h2>
            <h2> Select Plan </h2>
          </div>
        </li>
        <li className="flex cursor-pointer" onClick={selectThirdPage}>
          <h1
            className={`border rounded-full cursor-pointer h-10 w-10 px-3.5 py-1.5 ${
              page == 2 && "bg-blue-200"
            }`}
          >
            {" "}
            3{" "}
          </h1>
          <div className="hidden md:block">
            <h2> Step 3 </h2>
            <h2> Add-ons </h2>
          </div>
        </li>
        <li className="flex cursor-pointer" onClick={selectFourthPage}>
          <h1
            className={`border rounded-full cursor-pointer h-10 w-10 px-3.5 py-1.5 ${
              page == 3 && "bg-blue-200"
            }`}
          >
            {" "}
            4{" "}
          </h1>
          <div className="hidden md:block">
            <h2> Step 4 </h2>
            <h2> Summary </h2>
          </div>
        </li>
      </ul>
    </div>
  );
}
