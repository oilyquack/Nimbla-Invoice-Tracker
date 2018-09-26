import React from "react";

function Invoice({ invoiceId, amount, payBy, customer, services }) {
  return (
    <div>
      <h2>{invoiceId}</h2>
      <p>{amount}</p>
      <p>{payBy}</p>
      <p>{customer}</p>
      <p>{services}</p>
    </div>
  );
}

export default Invoice;
