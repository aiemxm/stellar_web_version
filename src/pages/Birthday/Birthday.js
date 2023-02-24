import { useRef, useState } from "react";
import useNasaApi from "../../hooks/useNasaApi";
import Loader from "../../components/Loader/Loader";
import YouAreTooOld from "../../components/YouAreTooOld/YouAreTooOld";
import useFormatDate from "../../hooks/useFormatDate";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./Birthday.css";
import BirthdayPicture from "../../components/BirthdayPicture/BirthdayPicture";
import YouAreFuture from "../../components/YouAreFuture/YouAreFuture";

export const Birthday = () => {
  const birthdateInput = useRef("");
  const [date, setDate] = useState("");
  const handleBirthdayInput = () => {
    setDate(birthdateInput.current.value);
    request(birthdateInput.current.value);
  };

  const [loading, data, error, request] = useNasaApi("", false);
  const today = useFormatDate(new Date());
  if (error !== "") return <p>{error}</p>;

  return (
    <div className="birthday-main">
      <div className="inputs">
        <input type="date" ref={birthdateInput} />
        <CustomButton action={"Discover"} handler={handleBirthdayInput} />
      </div>
      <div>
        {loading && <Loader />}
        {error !== "" && <p>{error}</p>}
        {date !== "" ? (
          date > today ? (
            <YouAreFuture />
          ) : date > "1995-06-15" ? (
            <BirthdayPicture
              mediaType={data.media_type}
              url={data.url}
              title={data.title}
              date={data.date}
            />
          ) : (
            <YouAreTooOld />
          )
        ) : (
          <p>What's your birthday picture?</p>
        )}
      </div>
    </div>
  );
};
