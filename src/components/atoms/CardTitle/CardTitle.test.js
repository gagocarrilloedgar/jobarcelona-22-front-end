import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CardTitle from "./CardTitle";

describe("CardTitle", () => {
  it("render children properly", () => {
    const title = "Testing title";
    const { container } = render(<CardTitle>{title}</CardTitle>);
    expect(container).toHaveTextContent(title);
  });
});
