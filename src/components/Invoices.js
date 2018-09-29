import React from "react";
import Invoice from "./Invoice";

class Invoices extends React.Component {
  constructor() {
    super();

    this.state = {
      invoicesDisplay: [],
      filterBy: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.invoices != this.props.invoices) {
      this.setState({
        invoicesDisplay: [...this.props.invoices],
        filterBy: "all"
      });
    }
  }

  changeHandler(event) {
    if (event.target.value === "unpaid") {
      const invoicesCopy = [...this.props.invoices];
      const invoicesSort = invoicesCopy.filter(
        invoice => invoice.paid === null
      );

      this.setState({
        invoicesDisplay: [...invoicesSort],
        filterBy: "unpaid"
      });
    }
    if (event.target.value === "paid") {
      const invoicesCopy = [...this.props.invoices];
      const invoicesSort = invoicesCopy.filter(invoice => invoice.paid != null);

      this.setState({
        invoicesDisplay: [...invoicesSort],
        filterBy: "paid"
      });
    }
    if (event.target.value === "all") {
      this.setState({
        invoicesDisplay: [...this.props.invoices],
        filterBy: "all"
      });
    }
  }
  render() {
    return (
      <div className="app__invoices">
        <select value={this.state.filterBy} onChange={this.changeHandler}>
          <option value="all">All</option>
          <option value="paid" defaultValue>
            Paid
          </option>
          <option value="unpaid">Unpaid</option>
        </select>
        <div className="app__invoices__display">
          {this.state.invoicesDisplay.map(invoice => {
            return (
              <Invoice
                updateReceiver={this.props.updateReceiver}
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
      </div>
    );
  }
}

export default Invoices;
