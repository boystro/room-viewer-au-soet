export default class PeriodInfoObject {
  constructor(subject = "-", teacher = "-", room = 0) {
      this.subject = subject;
      this.teacher = teacher;
      this.room = room;
  }

  displayInfo() {
      console.log(`Subject: ${this.subject}`);
      console.log(`Teacher: ${this.teacher}`);
      console.log(`Room: ${this.room}`);
  }
}
