export default function useSetUrl(dateOne, dateTwo) {
  return dateTwo != null
    ? `https://apod.ellanan.com/api?&thumbs=True&start_date=${dateOne}&end_date=${dateTwo}`
    : `https://apod.ellanan.com/api?&thumbs=True&date=${dateOne}`;
}
