import Logo from ".";
import { render } from "@testing-library/react-native";

describe("Logo", () => {
  it("case my component was printed an screen ", () => {
    const { getByTestId } = render(<Logo />);

    expect(getByTestId("Logo")).toBeTruthy();
  });
});
