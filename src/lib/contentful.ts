import contentful from 'contentful'

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,  // space ID
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN  // preview token для разработки
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,  // delivery token для продакшн
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
})
