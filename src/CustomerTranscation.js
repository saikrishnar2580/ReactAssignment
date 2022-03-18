import "./styles.css";
import { useSelector } from "react-redux";
import React from "react";
import Row from "./Row";

export default function CustmerTranscation() {
  const customerData = useSelector((state) => state.customer.customers);
  return (
    <div>
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
