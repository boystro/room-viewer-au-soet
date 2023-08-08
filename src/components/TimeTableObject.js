import PeriodInfoObject from "./PeriodInfoObject";

export default class TimeTableObject {
    constructor(data) {
        if (data) {
            this.schedule = data;
        } else {
            this.schedule = {};
            const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
            for (const day of daysOfWeek) {
                this.schedule[day] = Array.from({ length: 7 }, () => new PeriodInfoObject());
            }
        }
    }

    toJson() {
        return this.schedule;
    }

    static fromJson(data) {
        return new TimeTableObject(data);
    }
}
