// we should define this function inside the app!
const IMPORTER = (language: string, namespace: string) =>
  import(`web/public/locales/${language}/${namespace}.json`)

export { IMPORTER }
