export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light" : "Dark"}
    >
      <span className="theme-toggle__mark" aria-hidden="true">
        {isDark ? "☾" : "☀"}
      </span>
      <span className="theme-toggle__text">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
