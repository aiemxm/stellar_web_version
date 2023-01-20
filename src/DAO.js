import axios from "axios";

class DAO {

    url = `https://api.nasa.gov/planetary/apod?api_key=Vv8c1bsJK7bHuIDRy3VD9agAoKs337WJA1zQP5k1&start_date=${this.sevenDaysAgo}&end_date=${this.today}`;

    setDateFormat(date = new Date()) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    getDateForWeeksAgo(date) {
        const daysAgo = new Date(date.getTime());
        daysAgo.setDate(date.getDate() - 28);
        return daysAgo;
    }

    getOneMonth = async () => {
        const sevenDaysAgo = this.setDateFormat(this.getDateForWeeksAgo(new Date()))
        const today = this.setDateFormat(new Date())
        const result = await axios.get(
            this.url,
        );
        return result;
    };


}

export default DAO;