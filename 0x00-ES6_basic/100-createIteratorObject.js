export default function createIteratorObject(report) {
  const { allEmployees } = report;

  let employeesList = [];

  for (const department of Object.keys(allEmployees)) {
    employeesList = employeesList.concat(allEmployees[department]);
  }

  const idx = 0;
  return {
    next() {
      if (idx < employeesList.length) {
        return { value: employeesList.shift(), done: false };
      }
      return { value: undefined, done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
