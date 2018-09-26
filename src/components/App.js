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
  }

  invoiceReceiver(invoice) {
    this.setState({
      invoices: [...this.state.invoices, invoice]
    });
  }

  render() {
    return (
      <div>
        <SubmitForm
          invoiceID={this.state.invoices.length}
          invoiceReceiver={this.invoiceReceiver}
        />
        <Invoices invoices={this.state.invoices} />
      </div>
    );
  }
}

export default App;
