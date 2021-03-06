import "./styles.css";
import React, { useState } from "react";
import Row1 from "./Row1";

export default function Row(props) {
  const data = props.data;
  const [open, setOpen] = useState(false);

  const getTotalTransaction = (data) => {
    let totalAmount = 0;
    data.forEach((element) => {
      totalAmount += element.transcationAmount;
    });
    return totalAmount;
  };

  const getTotalPoints = (data) => {
    let totalPoints = 0;
    data.forEach((element) => {
      if (element.transcationAmount > 100)
        totalPoints += (element.transcationAmount - 100) * 2 + 50 * 1;
      else if (element.transcationAmount > 50)
        totalPoints += (element.transcationAmount - 50) * 1;
    });
    return totalPoints;
  };
  return (
    <React.Fragment>
      <tr onClick={() => setOpen(!open)}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td></td>
        <td>{getTotalTransaction(data.transcationHistory)}</td>
        <td>{getTotalPoints(data.transcationHistory)}</td>
      </tr>
      <Row1 data={data.transcationHistory} open={open} />
    </React.Fragment>
  );
}
