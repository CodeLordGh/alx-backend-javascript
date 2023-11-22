// 2-read_file.js

const fs = require('fs');
const path = require('path');

module.exports = function countStudents(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }

  const students = [];

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lines = fileContent.split('\n');

  for (const line of lines) {
    // eslint-disable-next-line no-continue
    if (!line) continue; // Skip empty lines

    const [firstName, lastName, age, field] = line.split(',');
    students.push({
      firstName, lastName, age, field,
    });
  }

  console.log(`Number of students: ${students.length}`);

  for (const field of [...new Set(students.map((student) => student.field))]) {
    const fieldStudents = students.filter((student) => student.field === field);
    const fieldStudentNames = fieldStudents.map((student) => student.firstName).join(', ');
    console.log(`Number of students in ${field}: ${fieldStudents.length}`);
    console.log(`List: ${fieldStudentNames}`);
  }
};
