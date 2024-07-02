export default function iteratethroughObject(reportWithIterator) {
  const employees = [];

  for (const employee of reportWithIterator) {
    employees.push(employee);
  }
  return employees.join(' | ');
}
