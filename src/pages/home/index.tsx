import React from 'react'

import { useHome } from './hooks/useHome'
import * as S from './styles'
import { DragOnDrop, Header } from '@/components'

export const Home: React.FC = () => {
  const { html, setFile } = useHome()

  return (
    <S.Container>
      <Header
        title='Gerar XLSX'
        subtitle='Gerar tabelas de um arquivo docx em um arquivo xlsx'
      />

      <S.Content>
        <DragOnDrop setFile={setFile} />
        {html}
      </S.Content>
    </S.Container>
  )
}
