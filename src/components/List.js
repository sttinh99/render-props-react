import React from "react";

export default function ({ list, render }) {
  return <div>{list.map((item) => render(item))}</div>;
}
