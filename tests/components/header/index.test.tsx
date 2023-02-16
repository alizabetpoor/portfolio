import Header from "@/components/Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("renders a Header", () => {
    render(<Header />);
    expect(screen.getAllByText("About Me")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Experience")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Contact Me")[0]).toBeInTheDocument();
  });

  it("go to the section by button click", () => {
    render(<Header />);
    expect(screen.getAllByText("About Me")[0].closest("a")).toHaveAttribute(
      "href",
      "#about"
    );
    expect(screen.getAllByText("Experience")[0].closest("a")).toHaveAttribute(
      "href",
      "#experience"
    );
    expect(screen.getAllByText("Contact Me")[0].closest("a")).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});
