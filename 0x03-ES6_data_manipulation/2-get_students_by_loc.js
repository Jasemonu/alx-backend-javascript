export default function getStudentsByLocation(studentList, city) {
  // Use the filter function to find students located in the specified city
  const filteredStudents = studentList.filter(student => student.location === city);
  return filteredStudents;
}
