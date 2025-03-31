import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("Render Hello World As a text", () => {
  //Arrange
  render(<Greeting />);

  //Act
  //... nothing

  //Assert
  const helloWorldElement = screen.getByText("Hello World", { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});
