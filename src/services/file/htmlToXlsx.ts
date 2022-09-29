import { writeFile, utils } from 'xlsx'

export const conversionXLSX = (params: {
  htmlTables: string
  fileName: string
}): void => {
  const parsedHtml = new DOMParser().parseFromString(
    params.htmlTables,
    'text/html'
  )

  const exportableTables = parsedHtml.getElementsByTagName('table')
  const generatedXlsx = utils.table_to_book(exportableTables[0])
  writeFile(generatedXlsx, `./tmp/${params.fileName}.xlsx`)
}
