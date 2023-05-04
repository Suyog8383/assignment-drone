import { useContext } from "react";
import { createNewContext } from "./assignment-drone";

function FinalDrone() {
  const { userDetails } = useContext(createNewContext);
  // console.log("@SN ", userDetails, setUserDetails);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>Result</h3>
        <span>Name:= {userDetails.basic.name}</span>
        <span>Place:= {userDetails.basic.place}</span>
        <span>Number:= {userDetails.basic.number}</span>
        {userDetails.questions.map((item, index) => {
          return (
            <span key={index}>
              {item.title}
              <br />
              := {item.answer}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default FinalDrone;
