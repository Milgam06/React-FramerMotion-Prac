import React from "react";
import { Global } from "@emotion/react";
import { Router } from "./Router";
import { globalStyle } from "./styles/globalStyle";

export const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Router />
    </>
  );
};

export default App;
