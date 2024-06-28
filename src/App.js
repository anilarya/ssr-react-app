import React from 'react';

const App = ({ employees }) => {
  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>{employee.employee_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
