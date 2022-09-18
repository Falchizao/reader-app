import { useCallback, useEffect, useState } from 'react'
import { conversionXLSX } from '@/services/file/htmlToXlsx'
import { parseDocxToHtml } from '@/services'

export const useHome = () => {
  const emptyFile: File = {} as File
  const [file, setFile] = useState<File>(emptyFile)
  const [html, setHtml] = useState<string>('')

  const parseFile = useCallback(async () => {
    const parsedDoc = await parseDocxToHtml(await file.arrayBuffer());
    const parsedTables = await conversionXLSX(parsedDoc);
    setHtml(parsedTables)
  }, [file])

  useEffect(() => {
    parseFile()
  }, [parseFile])

  return {
    html,
    setFile
  }
}
