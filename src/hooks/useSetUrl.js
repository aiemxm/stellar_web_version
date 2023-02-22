export default function useSetUrl(dateOne, dateTwo) {
  return dateTwo != null
    ? `https://apod.ellanan.com/api?start_date=${dateOne}&end_date=${dateTwo}`
    : `https://apod.ellanan.com/api?date=${dateOne}`;
}
