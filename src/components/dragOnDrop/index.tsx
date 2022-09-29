import React, { useCallback, useEffect, useState } from 'react'

import { useDropzone } from 'react-dropzone'

import * as S from './styles'

type DragOnDropProps = {
  title?: string
  description?: string
  setFile: React.Dispatch<React.SetStateAction<File>>
}

export const DragOnDrop: React.FC<DragOnDropProps> = ({
  title = 'IMPORTAR',
  description = 'Arraste e solte aqui ou clique para escolher seu arquivo no formato .docx',
  setFile
}) => {
  const [fileRejectionsItems, setFileRejectionsItems] = useState<
    React.ReactNode[]
  >([])

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      useFsAccessApi: false,
      accept: {
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          ['.docx']
      }
    })

  const getFileRejectionsItems = useCallback(
    () =>
      fileRejections.map(({ file }) => (
        <li key={file.path}>{file.name} - Arquivo incompatível</li>
      )),

    [fileRejections]
  )

  useEffect(() => {
    if (fileRejections.length > 0) {
      setFileRejectionsItems(getFileRejectionsItems())
      return
    }

    const [file] = acceptedFiles
    setFileRejectionsItems([])
    setFile(file)
  }, [acceptedFiles, fileRejections, getFileRejectionsItems, setFile])

  return (
    <S.Container>
      <section {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />

        <S.Content>
          <h4>{title}</h4>
          <p>{description}</p>
          <ul>{fileRejectionsItems}</ul>
        </S.Content>
      </section>
    </S.Container>
  )
}
