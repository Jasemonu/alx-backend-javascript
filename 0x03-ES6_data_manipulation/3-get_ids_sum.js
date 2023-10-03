export default function getStudentIdsSum(studentList) {
  // Use the reduce function to calculate the sum of student IDs
  const sumOfIds = studentList.reduce((sum, student) => sum + student.id, 0);
  return sumOfIds;
}
