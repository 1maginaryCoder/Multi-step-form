import "./styles.css";
import NavCard from "../Components/NavCard";
import PersonalInfo from "../Components/PersonalInfo";
import AddOns from "../Components/AddOns";
import SelectPlan from "../Components/SelectPlan";
import Summary from "../Components/Summary";
import { useState } from "react";

export default function App() {
  const [userData, setUserData] = useState({
    name: "Avinash",
    email: "avi",
    phnNum: "897",
    plan: {
      type: "Arcade",
      paymentPeriod: "Monthly"
    },
    onlineService: false,
    largerStorage: false,
    CustomizabeProfile: false
  });
  const [page, setPage] = useState([0]);

  return (
    <div className="flex flex-col md:flex-row max-w-sm md:max-w-xl mx-auto h-48 max-h-full md:max-h-screen md:my-20">
      <NavCard page={page} setPage={setPage} />
      <div>
        {
          {
            0: (
              <PersonalInfo
                userData={userData}
                setUserData={setUserData}
                page={page}
                setPage={setPage}
              />
            ),
            1: (
              <SelectPlan
                userData={userData}
                setUserData={setUserData}
                page={page}
                setPage={setPage}
              />
            ),
            2: (
              <AddOns
                userData={userData}
                setUserData={setUserData}
                page={page}
                setPage={setPage}
              />
            ),
            3: (
              <Summary
                userData={userData}
                setUserData={setUserData}
                page={page}
                setPage={setPage}
              />
            )
          }[page]
        }
      </div>
    </div>
  );
}
