export const getColorsBy = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? 'black' : 'white',
  primaryText: theme === 'dark' ? 'white' : 'black',
});
