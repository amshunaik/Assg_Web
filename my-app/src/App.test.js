import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Counter with correct initial count", () => {
    render(<App />);
    const countValue = screen.getByTestId("count");
    expect(countValue).toHaveTextContent("Count: 4");
});
