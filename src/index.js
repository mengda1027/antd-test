import React from "react";
import { render } from "react-dom";
import TestForm from "./test";

const dataList = [
  { content: "content1", text: "text1" },
  { content: "cotent2", text: "text2" },
  { content: "cotent3", text: "text3" }
];

render(<TestForm list={dataList} />, document.getElementById("root"));
