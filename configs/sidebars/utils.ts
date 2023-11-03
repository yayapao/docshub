export const genSiderItem = (prefix: string, names: string[]) => {
  return names.map((item) => {
    return `${prefix}/${item}`;
  });
};
