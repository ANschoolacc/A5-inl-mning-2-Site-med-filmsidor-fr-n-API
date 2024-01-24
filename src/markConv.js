import showdown from 'showdown';


export default function markDownConv(markDownText) {
  const converter = new showdown.Converter()
  const markDownToHtml = converter.makeHtml(markDownText)
  const elWithClass = markDownToHtml.slice(0, 2) + ' class="movie__description"' + markDownToHtml.slice(2);

  return elWithClass;
}

