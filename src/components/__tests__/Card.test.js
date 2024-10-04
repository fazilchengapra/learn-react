import { render, screen } from "@testing-library/react";
import resData from "../mocks/cardMocks.json";
import Card from "../Card";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

it("rendered or not a card component with props", () => {
  render(
    <BrowserRouter>
      <Card resData={resData} />
    </BrowserRouter>
  );

  const restroName = screen.getByText('Chinese Wok')
  expect(restroName).toBeInTheDocument()
});
