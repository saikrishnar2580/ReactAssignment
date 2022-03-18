import "./styles.css";
import React, { useEffect, useState } from "react";

const monthsText = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export default function Row1(props) {
  const data = props.data;
  let monthsData = {
    January: [],
    February: [],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: []
  };
  const [open1, setOpen1] = useState(false);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    if (monthsData) {
      data.forEach((transcation) => {
        let date = transcation.transcationDate.split("/");
        monthsData[`${monthsText[parseInt(date[1]) - 1]}`].push(transcation);
      });
      setData1(monthsData);
    }
  }, [props.data]);

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

  const rowMonths = () =>
    Object.keys(data1).map((month, key) => {
      if (data1[month].length > 0) {
        return (
          <React.Fragment>
            <tr
              style={{ display: props.open ? "" : "none" }}
              onClick={() => setOpen1(!open1)}
              key={key}
            >
              <td></td>
              <td>{month}</td>
              <td></td>
              <td>{getTotalTransaction(data1[month])}</td>
              <td>{getTotalPoints(data1[month])}</td>
            </tr>
            {data1[month].map((transcation) => {
              return (
                <tr style={{ display: props.open && open1 ? "" : "none" }}>
                  <td></td>
                  <td></td>
                  <td>{transcation.transcationDate}</td>
                  <td>{transcation.transcationAmount}</td>
                  <td>{getTotalPoints([transcation])}</td>
                </tr>
              );
            })}
          </React.Fragment>
        );
      }
    });
  return <React.Fragment>{rowMonths()}</React.Fragment>;
}
