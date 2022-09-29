import React from 'react'

import { useHome } from './hooks/useHome'
import * as S from './styles'
import { DragOnDrop, Header, DownloadButton } from '@/components'

export const Home: React.FC = () => {
  const { filePath, file, setFile } = useHome()

  return (
    <S.Container>
      <Header
        title='Gerar XLSX'
        subtitle='Gerar tabelas de um arquivo docx em um arquivo xlsx'
      />

      <S.Content>
        <DragOnDrop setFile={setFile} />

        {!!filePath && (
          <DownloadButton href={filePath} bytesAmount={file?.size} />
        )}
      </S.Content>
    </S.Container>
  )
}
