import { useCallback } from 'react'

import { useDropzone } from 'react-dropzone'

import * as S from './styles'

type DragOnDropProps = {
  title?: string
  description?: string
  setFile: React.Dispatch<React.SetStateAction<File>>
}

export const DragOnDrop: React.FC<DragOnDropProps> = ({
  title = 'IMPORTAR',
  description = 'Arraste e solte aqui ou clique para escolher seu arquivo no formato .doc',
  setFile
}) => {
  const onDrop = useCallback(
    acceptedFiles => {
      const [file] = acceptedFiles
      setFile(file)
    },
    [setFile]
  )

  const { getRootProps, getInputProps } = useDropzone({
    useFsAccessApi: false,
    onDrop
  })

  return (
    <S.Container>
      <section {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <S.Content>
          <h4>{title}</h4>
          <p>{description}</p>
        </S.Content>
      </section>
    </S.Container>
  )
}
