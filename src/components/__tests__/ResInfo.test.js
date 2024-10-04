import { act, fireEvent, render, screen } from "@testing-library/react";
import RestroInfo from "../RestroInfo";
import resInfoMock from "../mocks/resInfoMock.json";
import { Provider } from "react-redux";
import RestroCategery from "../RestroCategery";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../../util/appStore";
import Header from "../Header";

window.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resInfoMock);
    },
  });
});

it("RestroInfo component rendered or not", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestroInfo />
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });

  const DrinkBtn = screen.getByText("Drinks (8)");

  fireEvent.click(DrinkBtn);

  // const dataText = screen.getByText('Pepsi Pet Bottle')
  // console.log(dataText);

  const addbtn = screen.getAllByRole("button");
  fireEvent.click(addbtn[1]);
  fireEvent.click(addbtn[2]);

  const cartCount = screen.getByText('Cart - (2 items)')
});
