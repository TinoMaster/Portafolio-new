export const convertSectionTitle = (title: string, id: number) => {
  if (title) {
    return `${title.slice(0, 4).split(" ").join("")}${id}`;
  }
};
