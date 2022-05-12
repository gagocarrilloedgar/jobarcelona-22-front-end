import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CardDescription from "./CardDescription";

describe("CardDescription", () => {
  it("render children properly", () => {
    const description = "Testing CardDescription";
    const { container } = render(
      <CardDescription>{description}</CardDescription>
    );
    expect(container).toHaveTextContent(description);
  });
});
