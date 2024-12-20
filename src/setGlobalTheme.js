import Cookies from "js-cookie";

const setGlobalTheme = (theme) => {
  document.documentElement.style.setProperty(
    "--theme",
    theme === "Light"
      ? "#f5f5f5"
      : "linear-gradient(315deg,#100514,rgb(40, 40, 60))"
  );
  document.documentElement.style.setProperty(
    "--textTheme",
    theme === "Light" ? "#555" : "#DDD"
  );
  document.documentElement.style.setProperty(
    "--cardTheme",
    theme === "Light" ? "#f5f5f5" : "rgba(140, 140, 140, 0.3)"
  );
  Cookies.set("theme", theme);
};

export default setGlobalTheme;
