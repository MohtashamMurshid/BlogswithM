import React from "react";

const card = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "#090909",
  color: "#f5f5f5",
  padding: "72px 76px 62px",
  fontFamily: "Roboto",
};

const topLabel = {
  fontSize: 24,
  letterSpacing: 2.2,
  textTransform: "uppercase",
  color: "#a3a3a3",
};

const titleStyle = {
  display: "block",
  fontSize: 84,
  lineHeight: 1.05,
  letterSpacing: -2,
  fontWeight: 500,
  marginTop: 28,
  marginBottom: 0,
};

const footerRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 26,
};

const brandStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: 30,
  color: "#d4d4d4",
};

const accentLine = {
  width: 136,
  height: 2,
  borderRadius: 99,
  background: "#404040",
};

/**
 * @param {import("astro-opengraph-images").RenderFunctionInput} input
 */
export async function editorialOg(input) {
  const { title } = input;
  return React.createElement(
    "div",
    { style: card },
    React.createElement(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      React.createElement("div", { style: topLabel }, "blog.mohtasham.dev"),
      React.createElement("h1", { style: titleStyle }, title),
    ),
    React.createElement(
      "div",
      { style: footerRow },
      React.createElement(
        "div",
        { style: brandStyle },
        React.createElement("span", null, "Mohtasham Murshid M."),
      ),
      React.createElement("div", { style: accentLine }),
    ),
  );
}
