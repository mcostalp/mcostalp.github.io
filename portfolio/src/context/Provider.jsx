import React, { useEffect, useState } from "react";
import Context from "./Context";
import { projects, projectDescriptions } from "../data/projects";

export default function Provider({ children }) {
  const [response, setResponse] = useState([]);

  const contextValue = {};

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
