const createClassRoom = (numberOfStudents) => {
  const studentSeat = (seat) => {
    return () => {
      return seat;
    };
  };

  let students = [];
  for (let i = 0; i < numberOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }
  return students;
};

const classRoom = () => {
  return createClassRoom(10);
};

let myClassRoom = classRoom();
