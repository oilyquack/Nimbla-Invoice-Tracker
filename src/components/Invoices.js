import React from "react";
import Invoice from "./Invoice";

class Invoices extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.invoices.map(invoice => {
          return (
            <Invoice
              invoiceId={invoice.id}
              amount={invoice.amount}
              payBy={invoice.payBy}
              customer={invoice.customer}
              services={invoice.services}
            />
          );
        })}
      </div>
    );
  }
}

export default Invoices;
