import React from 'react';

function TrainRow(props) {
  const { trainNumber, departureTime, arrivalTime, origin, destination } = props;

  return (
    <tr>
      <td>{trainNumber}</td>
      <td>{departureTime}</td>
      <td>{arrivalTime}</td>
      <td>{origin}</td>
      <td>{destination}</td>
    </tr>
  );
}

export default TrainRow;
