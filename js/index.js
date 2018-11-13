class User {
  constructor(firstName, lastName, email, birthDate, gender = 'Female') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthDate = birthDate;
    this.gender = gender;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, email, birthDate, gender) {
    super(firstName, lastName, email, birthDate, gender);
    this.studentId = this.generateId();
  }

  generateId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }
}

let students = [];

const onSubmit = () => {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const birthDate = document.getElementById('birthDate').value;
  const gender = document.getElementById('gender').value;
  const student = new Student(firstName, lastName, email, birthDate, gender);
  students.push(student);
  alert('Successfully Registered');
  return false;
}

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;


const countStudents = (gender = 'Male') => {
  const filteredStudents = students.filter(student => student.gender === gender);
  alert(`No of ${gender}s: ${filteredStudents.length}`);
}

const getStudentList = () => {
  const studentNames = students.map(student => student.fullName()).sort();
  alert(`Names: ${JSON.stringify(studentNames)}`);
}
