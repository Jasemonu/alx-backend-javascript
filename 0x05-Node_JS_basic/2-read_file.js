const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const rows = data.trim().split('\n').map((row) => row.split(','));

    const validRows = rows.filter((row) => row.length === 4 && row[0] !== 'firstname');

    console.log(`Number of students: ${validRows.length}`);

    const fields = {};
    validRows.forEach((row) => {
      const field = row[3];
      if (!Object.prototype.hasOwnProperty.call(fields, field)) {
        fields[field] = [];
      }
      fields[field].push(row[0]);
    });

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
