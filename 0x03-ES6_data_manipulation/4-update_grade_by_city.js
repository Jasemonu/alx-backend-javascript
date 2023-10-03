export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Use filter to select students in the specified city
  const studentsInCity = studentList.filter((student) => student.location === city);

  // Use map to create a new array with updated grades
  const updatedStudents = studentsInCity.map((student) => {
    // Find the corresponding grade object in newGrades by studentId
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    // If a grade object is found, use its grade; otherwise, set grade to "N/A"
    const grade = gradeObject ? gradeObject.grade : 'N/A';

    // Create a new student object with the updated grade
    return { ...student, grade };
  });

  return updatedStudents;
}
