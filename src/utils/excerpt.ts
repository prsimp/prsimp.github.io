/**
 * Extracts a plain-text excerpt from a markdown string.
 * Strips headings, HTML, links, and emphasis, then returns
 * the first non-empty paragraph, truncated to maxLength.
 */
export function getExcerpt(body: string, maxLength = 160): string {
  const text = body
    .replace(/^#+.+$/gm, '') // headings
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links → text
    .replace(/<[^>]+>/g, '') // HTML tags
    .replace(/[*_`]/g, '') // emphasis / inline code
    .replace(/>\s*/g, '') // blockquote markers
    .trim();

  const firstPara =
    text
      .split(/\n\n+/)
      .map((p) => p.replace(/\s+/g, ' ').trim())
      .find((p) => p.length > 0) ?? '';

  return firstPara.length > maxLength
    ? firstPara.slice(0, maxLength).replace(/\s+\S*$/, '…')
    : firstPara;
}
