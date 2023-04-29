import React from 'react';

function App() {
  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Origin</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123</td>
            <td>10:00 AM</td>
            <td>1:00 PM</td>
            <td>New York</td>
            <td>Boston</td>
          </tr>
          <tr>
            <td>456</td>
            <td>2:00 PM</td>
            <td>5:00 PM</td>
            <td>Boston</td>
            <td>New York</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
