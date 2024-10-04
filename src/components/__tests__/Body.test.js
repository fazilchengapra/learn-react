const { render, act, screen, fireEvent } = require("@testing-library/react");
const { default: Body } = require("../Body");
import { BrowserRouter } from "react-router-dom";
import bodyMock from "../mocks/bodyMock.json";
import '@testing-library/jest-dom'

window.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(bodyMock);
    },
  });
});

it("should search button is loaded or not", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole('button', {name: 'Search'})
  const searchInput = screen.getByTestId('searchInput')

  const beforeFire = screen.getAllByTestId("resCard")
  expect(beforeFire.length).toBe(8)
  
  fireEvent.change(searchInput, {target:{value: 'pizza'}})
  fireEvent.click(searchBtn)

  const resCard = screen.getAllByTestId("resCard")

  expect(resCard.length).toBe(2)
  

});
