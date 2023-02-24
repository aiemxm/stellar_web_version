export default function useFormatDate(date = new Date()) {
  let day = date.getDate();
  let month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let year = date.getFullYear();

  return `${year}-${month}-${day}`;
}
