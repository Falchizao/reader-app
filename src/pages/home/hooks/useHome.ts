import { useCallback, useEffect, useMemo, useState } from 'react'

import { parseDocxToHtml } from '@/services'
import { conversionXLSX } from '@/services/file/htmlToXlsx'

export const useHome = () => {
  const emptyFile: File = {} as File
  const [file, setFile] = useState<File>(emptyFile)

  const parseFile = useCallback(async () => {
    const parsedDoc = await parseDocxToHtml(await file.arrayBuffer())

    conversionXLSX({
      htmlTables: parsedDoc,
      fileName: file.name.split('.')[0]
    })
  }, [file])

  const filePath = useMemo(
    () => (file?.name ? `./tmp/${file.name.split('.')[0]}.xlsx` : ''),
    [file]
  )

  useEffect(() => {
    parseFile()
  }, [parseFile])

  return {
    filePath,
    file,
    setFile
  }
}
