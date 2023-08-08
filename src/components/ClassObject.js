import TimeTableObject from "./TimeTableObject";

export default class ClassObject {
  constructor(repName, coordName) {
      this.repName = repName;
      this.coordName = coordName;
      this.timetable = new TimeTableObject();
  }

  toJson() {
      return {
          repName: this.repName,
          coordName: this.coordName,
          timetable: this.timetable.toJson()
      };
  }

  static fromJson(data) {
      const newClass = new ClassObject(data.repName, data.coordName);
      newClass.timetable = TimeTableObject.fromJson(data.timetable);
      return newClass;
  }

  displayInfo() {
      console.log(`Class Representative: ${this.repName}`);
      console.log(`Class Coordinator: ${this.coordName}`);
      console.log("Time Table:");
      this.timetable.displaySchedule();
  }
}