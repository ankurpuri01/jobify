import Wrapper from '../assets/wrappers/ThemeToggle';

function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
  };

  return (
    <Wrapper onClick={toggleTheme} title="Toggle light/dark mode">
      <span className="toggle-icon" role="img" aria-label="theme">
        🌓
      </span>
    </Wrapper>
  );
}

export default ThemeToggle;
