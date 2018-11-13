class User {
  constructor(firstName, lastName, email, birthDate, gender = 'Female') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  get firstName() {
    return this.firstName;
  }

  set firstName(firstName) {
    this.firstName = firstName;
  }
  static generateId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default class Student extends User {
  constructor(firstName, lastName, email, birthDate, gender) {
    super(firstName, lastName, email, birthDate, gender);
    this.studentId = this.generateId();
  }

  const PI = 3.14159;
  let total = 3400;

  get studentId() {
    return this.studentId;
  }

  set studentId(studentId) {
    this.studentId = studentId;
  }

  generateId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }
}


export const PI;
export function generateId() {}
export default class User {}

module.exports = {
  PI,
  generateId,
  User
}

import User from './user'

import { User, generateId } from './user'

import * as User from './user'

import './user';




