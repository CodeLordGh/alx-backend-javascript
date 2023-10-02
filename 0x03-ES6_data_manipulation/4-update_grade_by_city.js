export default function updateStudentGradeByCity(
  listOfStudents,
  city,
  newGrades
) {
  return listOfStudents
    .filter(
      (student) => student.location === city
    ) /*Get list of students from a specific location */
    .map((student) => {
      const newGrade = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      if (newGrade) {
        student.grade = newGrade.grade;
      } else {
        student.grade = "N/A";
      }
      return student;
    });
}
