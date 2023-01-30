import DayData from "../models/DayData";

class DAO {


    setDateFormat(date = new Date()) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    // Get the date one month ago
    getDateForWeeksAgo(date = new Date()) {
        const daysAgo = new Date(date.getTime());
        daysAgo.setDate(date.getDate() - 28);
        return daysAgo;
    }

    async fetchOneMonth() {
        let aMonthAgo = this.setDateFormat(this.getDateForWeeksAgo(new Date()))
        let today = this.setDateFormat(new Date())
        let url = `https://apod.ellanan.com/api?start_date=${aMonthAgo}&end_date=${today}`;
        let oneDay = new DayData();
        let oneMonth = [];
        await fetch(url)
            .then(res => res.json())
            .then(data => {
                data.map(day => {
                    oneDay.url = day.url;
                    oneDay.date = day.date;
                    oneDay.hdurl = day.hdurl;
                    oneDay.title = day.title;
                    oneDay.explanation = day.explanation;
                    oneMonth.push(oneDay)
                })
            })

        return oneMonth;
    }

    async fetchOneDay(date) {
        const url = `https://apod.ellanan.com/api?date=${date}`;
        const oneDay = new DayData()

        await fetch(url)
            .then(res => res.json())
            .then(data => {
                oneDay.title = data.title;
                oneDay.url = data.url;
                oneDay.hdurl = data.hdurl;
                oneDay.date = data.date;
                oneDay.explanation = data.explanation;
            })

        return oneDay;
    }
}