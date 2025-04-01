import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("render posts if request succeeds", async () => {
    // Arrange
    render(<Async />);

    // Act
    // nothing ...

    // Assert
    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});
