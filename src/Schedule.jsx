import React from 'react';

function Schedule() {
  return (
    <div className="schedule">
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
          {/* rows will be dynamically generated later */}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
