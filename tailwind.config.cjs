module.exports = {
  content: ["./src/**/*.{svelte,html}"],
  theme: {
    colors: {
      black: "#242331",
      green: "#2E8A70",
      "green-mid": "#7DD7BE",
      "green-light": "#DBF4ED",
      red: "#DB504A",
      "red-mid": "#EDA19F",
      "red-light": "#FBEAEA",
      yellow: "#FFD166",
      "yellow-light": "#FFE7AD",
      "grey-overlay": "#9292A0",
      grey: "#9D9DAA",
      "grey-light-overlay": "#DFDFE2",
      "grey-light": "#F2F2F4",
      white: "#FEFFFC",
    },
    fontFamily: {
      lato: "Lato, sans-serif",
      "noto-sans": "Noto Sans, sans-serif",
      mono: "Consolas, Roboto, Menlo, monospace",
    },
    fontSize: {
      xs: ["13px", { lineHeight: "20px", letterSpacing: "-0.02em" }],
      sm: ["14px", { lineHeight: "21px", letterSpacing: "-0.02em" }],
      base: ["16px", { lineHeight: "23px", letterSpacing: "-0.012em" }],
      lg: ["18px", { lineHeight: "27px", letterSpacing: "-0.01em" }],
      xl: ["22px", { lineHeight: "32px", letterSpacing: "-0.008em" }],
      "2xl": ["26px", { lineHeight: "36px", letterSpacing: "-0.006em" }],
      "3xl": ["32px", { lineHeight: "42px", letterSpacing: "-0.004em" }],
      "4xl": ["42px", { lineHeight: "48px", letterSpacing: "-0.004em" }],
    },
    extend: {
      screens: {
        container: "840px",
      },
    },
  },
};
