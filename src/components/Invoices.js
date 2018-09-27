import React from "react";
import Invoice from "./Invoice";

function Invoices({ updateReceiver, invoices }) {
  return (
    <div>
      {invoices.map(invoice => {
        return (
          <Invoice
            updateReceiver={updateReceiver}
            key={invoice.id}
            invoiceId={invoice.id}
            amount={invoice.amount}
            payBy={invoice.payBy}
            customer={invoice.customer}
            services={invoice.services}
            paid={invoice.paid}
          />
        );
      })}
    </div>
  );
}

export default Invoices;
