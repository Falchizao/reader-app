import styled from 'styled-components'

import { sg } from '@/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 32px;
`

export const Content = styled.div`
  display: flex;
  margin-top: ${sg.spacing.xxxlarge};
`
