import { fireEvent, render } from "@testing-library/react-native";
import InputBase from "./";

describe("InputBase", () => {
  let type = "";
  const setTyped = jest.fn((value) => (type = value));
  it("should the component is printed an screen ", () => {
    const { getByText } = render(
      <InputBase title="E-mail" setState={setTyped} />
    );

    expect(getByText("E-mail")).toBeTruthy();
  });
  it("should the user typed something", () => {
    const CHANGE_TEXT = "Content";

    const { getByTestId } = render(
      <InputBase title="E-mail" setState={setTyped} />
    );

    fireEvent.changeText(getByTestId("Input"), CHANGE_TEXT);
    expect(type).toEqual(CHANGE_TEXT);
  });
});
