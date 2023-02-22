import { useRef } from "react";
import useNasaApi from "../../hooks/useNasaApi";
import Loader from "../../components/Loader/Loader";
import LoadedDetailView from "../../components/LoadedDetailView/LoadedDetailView";
import YouAreTooOld from "../../components/YouAreTooOld/YouAreTooOld";
export const Birthday = (props) => {
  const birthdateInput = useRef("");
  const handleBirthdayInput = () => request(birthdateInput.current.value);

  const [loading, data, error, request] = useNasaApi("", false);
  if (loading) return <Loader />;

  if (error !== "") return <p>{error}</p>;

  return (
    <div className="birthday-main">
      <input type="date" ref={birthdateInput} />
      <button type="button" onClick={handleBirthdayInput}>
        Go
      </button>

      {data && birthdateInput ? (
        <div className="birthday-picture">
          <img src={data.url} alt="" />
        </div>
      ) : (
        <YouAreTooOld />
      )}
    </div>
  );
};
