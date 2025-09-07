/**
 * @param {string} code
 */
export function format(code, indent = 2) {
  return code
    .replaceAll(/^\n/g, "")
    .replaceAll(/^\s+?$/gm, "")
    .replaceAll(new RegExp(`^\\s{${indent}}(?=\\S)`, "gm"), "")
    .replaceAll(/^.*prettier-ignore\n/gm, "")
    .replaceAll(/^.*ts-ignore\n/gm, "");
}
