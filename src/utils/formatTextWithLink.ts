/* El link debe escribirse de la siguiente forma __link:https://prueba.com**nombre */
export function formatTextWithLinks(text: string) {
  const regex = /__link:(.+?)\*\*(\w+)/g;
  let formattedText = text;

  formattedText = formattedText.replace(regex, (match, url, name) => {
    return `<a href="${url}" target="_blank">${name}</a>`;
  });

  return formattedText;
}
