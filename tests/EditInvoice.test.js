import React from "react";
import renderer from "react-test-renderer";
import EditInvoice from "../src/components/EditInvoice";

it("matches the snapshot", () => {
  const tree = renderer.create(<EditInvoice />);
  expect(tree).toMatchSnapshot();
});
