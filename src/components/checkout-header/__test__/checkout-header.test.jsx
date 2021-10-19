import { render, screen } from "@testing-library/react";
import CheckoutHeader from "../checkout-header.component";

describe("checkout-header", () => {
  test("renders all the headers correcctly", () => {
    render(<CheckoutHeader />);
    const productHeader = screen.getByText(/product/i);
    const descriptionHeader = screen.getByText(/description/i);
    const priceHeader = screen.getByText(/price/i);
    const quantityHeader = screen.getByText(/quantity/i);
    const removeHeader = screen.getByText(/remove/i);

    expect(productHeader).toBeInTheDocument();
    expect(descriptionHeader).toBeInTheDocument();
    expect(priceHeader).toBeInTheDocument();
    expect(quantityHeader).toBeInTheDocument();
    expect(removeHeader).toBeInTheDocument();
  });
});
