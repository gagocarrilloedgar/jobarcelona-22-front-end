import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CardTag from "./CardTag";

describe("CardTag", () => {
  it("render children properly", () => {
    const tag = "Testing tag";
    const { container } = render(<CardTag>{tag}</CardTag>);
    expect(container).toHaveTextContent(tag);
  });
});
