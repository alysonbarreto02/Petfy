import Logo from ".";
import { render } from "@testing-library/react-native";

describe("Logo", () => {
  it("case", () => {
    const { getByTestId } = render(<Logo />);

    const element = getByTestId("Logo");

    expect(element).toBeTruthy();
  });
});
