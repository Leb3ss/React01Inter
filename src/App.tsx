import './App.css';
import { useState } from 'react';
import EmployeeCard from './components/EmployeeCard';

interface Employee {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string;
  };
}

function App() {
  const [employee, setEmployee] = useState<Employee | null>(null);

  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then(({ results }) => {
        const [firstEmployee] = results;
        setEmployee(firstEmployee);
      })
      .catch((error) => {
        console.error("Error fetching the employee data:", error);
      });
  };

  return (
    <div className='App'>
      {employee ? <EmployeeCard employee={employee} /> : <p>No employee data available</p>}
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;
