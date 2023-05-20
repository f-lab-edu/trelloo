import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

describe("App", () => {
  it("sdf", () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );
  });
});
