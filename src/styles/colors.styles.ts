export const getColorsBy = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? 'black' : 'white',
  spinnerColor: theme === 'dark' ? 'white' : 'black',
  primaryText: theme === 'dark' ? 'white' : 'black',
});
