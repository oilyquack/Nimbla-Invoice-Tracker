import React from "react";
import renderer from "react-test-renderer";
import App from "../src/components/App";

it("matches the snapshot", () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});
