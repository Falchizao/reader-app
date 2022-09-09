import styled from 'styled-components'

import { sg } from '@/styles'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${sg.spacing.medium};
`

export const Title = styled.h1`
  font-size: ${sg.fontSize.xxlarge};
  color: ${sg.colors.grey200 + sg.opacity[80]};
`

export const Subtitle = styled.h2`
  font-size: ${sg.fontSize.medium};
  color: ${sg.colors.grey200 + sg.opacity[80]};
`
