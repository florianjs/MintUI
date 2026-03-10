export default defineEventHandler((event) => {
  if (event.path?.startsWith('/preview/')) {
    removeResponseHeader(event, 'X-Frame-Options')
    removeResponseHeader(event, 'Content-Security-Policy')
  }
})
