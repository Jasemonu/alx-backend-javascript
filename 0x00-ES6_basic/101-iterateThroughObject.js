export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const department in reportWithIterator.allEmployees) {
    if (reportWithIterator.allEmployees.hasOwnProperty(department)) {
      const employeesInDepartment = reportWithIterator.allEmployees[department];
      employeeNames.push(...employeesInDepartment);
    }
  }

  return employeeNames.join('|');
}
