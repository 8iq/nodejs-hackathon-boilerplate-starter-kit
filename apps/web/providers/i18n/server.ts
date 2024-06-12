import { getLocale, getServerTranslate } from '@repo/i18n/server'
import { IMPORTER } from './importer'

export async function getTranslate() {
  const locale = await getLocale()
  return await getServerTranslate(IMPORTER, locale)
}
