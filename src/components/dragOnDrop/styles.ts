import styled from 'styled-components'

import { sg } from '@/styles'

export const Container = styled.section`
  cursor: pointer;

  .dropzone {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    border: 1px solid ${sg.colors.grey100 + sg.opacity[80]};
    border-radius: ${sg.spacing.xlarge};

    padding: ${sg.spacing.xxxlarge};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: ${sg.fontSize.default};
    color: ${sg.colors.grey200 + sg.opacity[90]};
    margin: ${sg.spacing.medium} 0;
  }

  p {
    font-size: ${sg.fontSize.small};
    color: ${sg.colors.grey200 + sg.opacity[80]};
    text-align: center;
  }

  ul {
    margin-top: ${sg.spacing.medium};

    li {
      font-size: ${sg.fontSize.default};
      color: ${sg.colors.red500 + sg.opacity[90]};
      text-align: center;
    }
  }
`
