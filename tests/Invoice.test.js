import React from "react";
import renderer from "react-test-renderer";
import Invoice from "../src/components/Invoice";

it("matches the snapshot", () => {
  const tree = renderer.create(<Invoice />);
  expect(tree).toMatchSnapshot();
});
