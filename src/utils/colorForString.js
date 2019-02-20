const colorForString = (string, colors) => {
  const code = string
    .split('')
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return colors[code % colors.length];
};

export default colorForString;
