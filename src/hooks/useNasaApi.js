import { useEffect, useState } from "react";
import axios from "axios";
import UseSetUrl from "./useSetUrl";
import UseFormatDate from "./useFormatDate";

export default function useNasaApi(date, loadOnStart = true) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  let today = UseFormatDate(new Date());
  let aMonthAgo = UseFormatDate(getDateForWeeksAgo(new Date()));
  let url = date ? UseSetUrl(date) : UseSetUrl(aMonthAgo, today);

  useEffect(() => {
    console.log(date);
    if (loadOnStart) fetchData();
    else setLoading(false);
  }, []);

  function getDateForWeeksAgo(date) {
    const daysAgo = new Date(date.getTime());
    daysAgo.setDate(date.getDate() - 28);
    return daysAgo;
  }

  const request = (date) => fetchData(date);

  async function fetchData(date) {
    setLoading(true);
    axios(date ? UseSetUrl(date) : url)
      .then((response) => {
        setError("");
        setData(response.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  return [loading, data, error, request];
}
