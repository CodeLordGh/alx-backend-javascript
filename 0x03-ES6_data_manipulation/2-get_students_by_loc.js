export default function getStudentsByLocation(listOfAllStds, city) {
  return listOfAllStds.filter((student) => student.location === city);
}
