import React from "react";
import renderer from "react-test-renderer";
import DisplayInvoice from "../src/components/DisplayInvoice";

it("matches the snapshot", () => {
  const tree = renderer.create(<DisplayInvoice />);
  expect(tree).toMatchSnapshot();
});
