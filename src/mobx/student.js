import { makeAutoObservable } from "mobx";

class Student {
  instituteId = "";
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setInstituteId = (Id) => {
    this.instituteId = Id;
  };
}
const StudentStore = new Student();
export default StudentStore;
