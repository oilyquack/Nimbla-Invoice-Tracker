import React from "react";
import SubmitForm from "./SubmitForm";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      invoices: []
    };

    this.receiver = this.receiver.bind(this);
  }

  receiver(invoice) {
    this.setState(
      {
        invoices: [...this.state.invoices, invoice]
      },
      () => console.log(this.state.invoices)
    );
  }

  render() {
    return (
      <div>
        <SubmitForm
          invoiceID={this.state.invoices.length}
          receiver={this.receiver}
        />
      </div>
    );
  }
}

export default App;
