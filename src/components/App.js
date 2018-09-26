import React from "react";
import SubmitForm from "./SubmitForm";
import Invoices from "./Invoices";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      invoices: []
    };

    this.receiver = this.receiver.bind(this);
  }

  receiver(invoice) {
    this.setState({
      invoices: [...this.state.invoices, invoice]
    });
  }

  render() {
    return (
      <div>
        <SubmitForm
          invoiceID={this.state.invoices.length}
          receiver={this.receiver}
        />
        <Invoices invoices={this.state.invoices} />
      </div>
    );
  }
}

export default App;
