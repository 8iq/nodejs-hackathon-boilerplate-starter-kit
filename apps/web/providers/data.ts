import { DataProvider, simpleDataProvider } from '@repo/ui/refine/core'

const API_URL = 'https://api.fake-rest.refine.dev'
const dataProvider: DataProvider = simpleDataProvider(API_URL)

export { dataProvider }
