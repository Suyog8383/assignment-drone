/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { createNewContext } from "../context/userProfileContext";

function FormDrone() {
  const { userDetails, setUserDetails } = useContext(createNewContext);

  const handleNameChange = (e) => {
    setUserDetails({
      ...userDetails,
      basic: {
        ...userDetails.basic,
        name: e.target.value,
      },
    });
  };

  const handlePlaceChange = (e) => {
    setUserDetails({
      ...userDetails,
      basic: {
        ...userDetails.basic,
        place: e.target.value,
      },
    });
  };

  const handleNumberChange = (e) => {
    setUserDetails({
      ...userDetails,
      basic: {
        ...userDetails.basic,
        number: e.target.value,
      },
    });
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={userDetails.basic.name}
          onChange={handleNameChange}
        />
        <label htmlFor="">Place</label>
        <input
          type="text"
          value={userDetails.basic.place}
          onChange={handlePlaceChange}
        />
        <label htmlFor="">Mobile Number</label>
        <input
          type="number"
          value={userDetails.basic.number}
          onChange={handleNumberChange}
        />
      </div>
    </div>
  );
}

export default FormDrone;
