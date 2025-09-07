function fixIconoirSvg(
  svg: string,
  opts: { size?: string; strokeWidth?: string } = {},
) {
  opts.size ??= "20px";
  opts.strokeWidth ??= "1.5px";

  return svg
    .replaceAll('<?xml version="1.0" encoding="UTF-8"?>', "")
    .replaceAll(/ width="[^"]*"/g, ` width="${opts.size}"`)
    .replaceAll(/ height="[^"]*"/g, ` height="${opts.size}"`)
    .replaceAll(/stroke-width="[^"]*"/g, `stroke-width="${opts.strokeWidth}"`)
    .replaceAll('"', "'");
}

function makeDataUrl(svg: string) {
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
}

export function expandLines() {
  const iconoirSvg = `<?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M18 2L6 2" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 22L6 22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 14V19M12 19L15 16M12 19L9 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 10V5M12 5L15 8M12 5L9 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

  return makeDataUrl(fixIconoirSvg(iconoirSvg));
}

export function compressLines() {
  const iconoirSvg = `<?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M18 2L6 2" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 22L6 22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5V10M12 10L15 7M12 10L9 7" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 19V14M12 14L15 17M12 14L9 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

  return makeDataUrl(fixIconoirSvg(iconoirSvg));
}

export function restart() {
  const iconoirSvg = `<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.67742 20.5673C2.53141 18.0212 0.758026 12.7584 2.71678 8.1439C4.87472 3.0601 10.7453 0.68822 15.8291 2.84617C20.9129 5.00412 23.2848 10.8747 21.1269 15.9585C20.2837 17.945 18.8736 19.5174 17.1651 20.5673" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 16V20.4C17 20.7314 17.2686 21 17.6 21H22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22.01L12.01 21.9989" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

  return makeDataUrl(fixIconoirSvg(iconoirSvg));
}

export function iconMask(icon: keyof typeof icons, opts = {}) {
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(
    fixIconoirSvg(icons[icon], opts),
  )}")`;
}

const icons = {
  restart: `<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.67742 20.5673C2.53141 18.0212 0.758026 12.7584 2.71678 8.1439C4.87472 3.0601 10.7453 0.68822 15.8291 2.84617C20.9129 5.00412 23.2848 10.8747 21.1269 15.9585C20.2837 17.945 18.8736 19.5174 17.1651 20.5673" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 16V20.4C17 20.7314 17.2686 21 17.6 21H22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22.01L12.01 21.9989" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  "compress-lines": `<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.67742 20.5673C2.53141 18.0212 0.758026 12.7584 2.71678 8.1439C4.87472 3.0601 10.7453 0.68822 15.8291 2.84617C20.9129 5.00412 23.2848 10.8747 21.1269 15.9585C20.2837 17.945 18.8736 19.5174 17.1651 20.5673" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 16V20.4C17 20.7314 17.2686 21 17.6 21H22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22.01L12.01 21.9989" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  "expand-lines": `<?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M18 2L6 2" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 22L6 22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 14V19M12 19L15 16M12 19L9 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 10V5M12 5L15 8M12 5L9 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
} as const;
