import ThemedBadge from "@components/ui/ThemedBadge";
import React from "react";
import renderer from "react-test-renderer";

// Mock the theme context to provide consistent colors
jest.mock("@context/themeContext", () => ({
  useThemeContext: () => ({
    colors: ["#123456", "#654321"],
  }),
}));

it("renders ThemedBadge correctly with a title", () => {
  const tree = renderer.create(<ThemedBadge title="Hello World" />).toJSON();
  expect(tree).toMatchSnapshot();
});
