import { useState, useRef } from "react";
import UseNasaApi from "../../hooks/UseNasaApi";

export const Birthday = (props) => {
  const [birthdayData, setBirthdayData] = useState({});
  const birthdateInput = useRef(null);
  let date;
  const url = `https://apod.ellanan.com/api?date=`;

  const handleBirthdayInput = () => {
    fetch(url + birthdateInput.current.value)
      .then((response) => response.json())
      .then((data) => setBirthdayData(data))
      .catch(error => console.log(error))
  };

  return (
    <div className="birthday-main">
      <input type="date" ref={birthdateInput} />
      <button type="button" onClick={handleBirthdayInput}>
        Go
      </button>

      <div className="birthday-picture">
        <img src={birthdayData.url} alt="" />
      </div>
    </div>
  );
};
