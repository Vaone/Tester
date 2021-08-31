export const compare = (a, b) => {
  return a.filter(i => b.indexOf(i) < 0);
}