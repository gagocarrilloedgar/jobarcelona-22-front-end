import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("render with props", () => {
    const title = "This card has title";
    const description = "This card has description";
    const tags = ["Card tag 1", "card Tag 2"];
    const { container } = render(
      <Card title={title} description={description} tags={tags} />
    );

    expect(container).toHaveTextContent(title);
    expect(container).toHaveTextContent(description);
    expect(container).toHaveTextContent(...tags);
  });
});
