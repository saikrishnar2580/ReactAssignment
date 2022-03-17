import "./styles.css";
import { useSelector } from "react-redux";
import React from "react";
import Row from "./Row";

export default function App() {
  const customerData = useSelector((state) => state.customers);
  return (
    <div className="App">
      <h1>Customer Transaction Points</h1>
      <table>
        <tr>
          <th>Customer ID</th>
          <th>Customer Name</th>
          <th>Transaction Date</th>
          <th>Transaction Amount</th>
          <th>points</th>
        </tr>
        {customerData.map((customer) => {
          return <Row data={customer} />;
        })}
      </table>
    </div>
  );
}
