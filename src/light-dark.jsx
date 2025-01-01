import UseLocalStorage from "./useLocalstorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p> Hello world!</p>
        <button onClick={handleToggleTheme}>Change theme</button>
      </div>
    </div>
  );
}
