import AboutSection from "@/components/AboutSection";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("aboutSection", () => {
  it("renders aboutSection", () => {
    render(<AboutSection />);
    expect(screen.getByTestId("skills")).toBeInTheDocument();
    expect(screen.getByTestId("skills").children).toHaveLength(6);
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });
});
