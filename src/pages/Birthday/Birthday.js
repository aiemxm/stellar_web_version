import { useRef, useState } from "react";
import useNasaApi from "../../hooks/useNasaApi";
import Loader from "../../components/Loader/Loader";
import YouAreTooOld from "../../components/YouAreTooOld/YouAreTooOld";
import useFormatDate from "../../hooks/useFormatDate";

export const Birthday = () => {
  const birthdateInput = useRef("");
  const [date, setDate] = useState("");
  const handleBirthdayInput = () => {
    setDate(birthdateInput.current.value);
    request(birthdateInput.current.value);
  };

  const [loading, data, error, request] = useNasaApi("", false);
  const today = useFormatDate(new Date());
  if (loading) return <Loader />;

  if (error !== "") return <p>{error}</p>;

  return (
    <div className="birthday-main">
      <input type="date" ref={birthdateInput} />
      <button type="button" onClick={handleBirthdayInput}>
        recherche
      </button>
      {date !== "" ? (
        date > today ? (
          "futur"
        ) : date > "1995-06-15" ? (
          <div className="birthday-picture">
            <img src={data.url} alt="" />
          </div>
        ) : (
          <YouAreTooOld />
        )
      ) : (
        ""
      )}
    </div>
  );
};
