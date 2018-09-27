import React from "react";
import SubmitForm from "./SubmitForm";
import Invoices from "./Invoices";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      invoices: []
    };

    this.invoiceReceiver = this.invoiceReceiver.bind(this);
    this.updateReceiver = this.updateReceiver.bind(this);
  }

  invoiceReceiver(invoice) {
    this.setState({
      invoices: [...this.state.invoices, invoice]
    });
  }

  updateReceiver(invoice) {
    const invoicesCopy = [...this.state.invoices];

    const invoiceIndex = invoicesCopy.findIndex(
      origInvoice => origInvoice.id === invoice.id
    );

    this.setState({
      invoices: [
        ...invoicesCopy.slice(0, invoiceIndex),
        Object.assign({}, invoicesCopy[invoiceIndex], invoice),
        ...invoicesCopy.slice(invoiceIndex + 1)
      ]
    });
  }

  render() {
    return (
      <div className="app">
        <SubmitForm
          invoiceID={this.state.invoices.length}
          invoiceReceiver={this.invoiceReceiver}
        />
        <Invoices
          updateReceiver={this.updateReceiver}
          invoices={this.state.invoices}
        />
      </div>
    );
  }
}

export default App;
