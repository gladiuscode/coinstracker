export const getColorsBy = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? 'black' : 'white',
  spinnerColor: theme === 'dark' ? 'white' : 'black',
  bladeColor: theme === 'dark' ? '#e5e5e5' : '#cecece',
  primaryText: theme === 'dark' ? 'white' : 'black',
});
