import { render } from "@testing-library/react-native";
import { LoginArea } from "./";

describe("LoginArea", () => {
  it("should the component was printed in screen", () => {
    const { getAllByText } = render(<LoginArea navigation={() => {}} />);
  });
});
