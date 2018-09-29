import React from "react";
import renderer from "react-test-renderer";
import SubmitForm from "../src/components/SubmitForm";

it("matches the snapshot", () => {
  const tree = renderer.create(<SubmitForm />);
  expect(tree).toMatchSnapshot();
});
