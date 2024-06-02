// Toggle dark mode for the app bar (since BeerCSS doesn't do that automatically for blurred elements)
function toggleDarkThemeOnAppBar(state) {
  const appBarElement = document.querySelector('.appbar');
  if (appBarElement) {
    appBarElement.classList.toggle("dark", state);
  }
}

// Check if the system prefers dark mode
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

// Apply the dark theme class initially based on the system preference
toggleDarkThemeOnAppBar(prefersDark.matches);

// Listen for changes in the system's color scheme preference
prefersDark.addListener((event) => toggleDarkThemeOnAppBar(event.matches));
