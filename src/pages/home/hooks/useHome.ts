import { useCallback, useEffect, useState } from 'react'

import { parseDocxToHtml } from '@/services'

export const useHome = () => {
  const emptyFile: File = {} as File
  const [file, setFile] = useState<File>(emptyFile)
  const [html, setHtml] = useState<string>('')

  const parseFile = useCallback(async () => {
    const parsedDoc = await parseDocxToHtml(await file.arrayBuffer())
    setHtml(parsedDoc)
  }, [file])

  useEffect(() => {
    parseFile()
  }, [parseFile])

  return {
    html,
    setFile
  }
}
