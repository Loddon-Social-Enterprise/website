export default function contentfulLoader({ src, width, quality }) {
  if (!src.startsWith('_next/static/') && !src.endsWith('.svg')) {
    const url = new URL(`${src}`)
    url.searchParams.set('w', width.toString())
    url.searchParams.set('q', (quality || 75).toString())
    return url.href
  }
  return src;
}