export function minify(text: TemplateStringsArray) {
  return text[0].replace(/\s+/, " ").trim();
}
