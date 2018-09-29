import React from "react";
import renderer from "react-test-renderer";
import Invoices from "../src/components/Invoices";

it("matches the snapshot", () => {
  const tree = renderer.create(<Invoices />);
  expect(tree).toMatchSnapshot();
});
