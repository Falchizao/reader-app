import styled from 'styled-components'

import { sg } from '@/styles'

export const Button = styled.a`
  cursor: 'pointer';

  padding: ${sg.spacing.xxlarge} ${sg.spacing.xxlarge};
`

export const FaceButton = styled.a`
  height: ${sg.spacing.xxxxxlarge};
  accent-color: ${sg.colors.green};

  display: inline-block;
  border: 3px solid ${sg.colors.green};

  font-family: ${sg.fontFamily.primary};
  font-size: ${sg.fontSize.large};
  font-weight: 500;
  text-align: center;
  text-decoration: none;

  color: ${sg.colors.green};
  overflow: hidden;
  margin: ${sg.spacing.xxlarge} 0;

  svg {
    margin-right: ${sg.spacing.small};
  }

  .face-primary,
  .face-secondary {
    display: block;
    padding: 0 32px;
    line-height: ${sg.spacing.xxxxxlarge};
    transition: margin 0.4s;
  }

  .face-primary {
    background-color: ${sg.colors.green};
    color: ${sg.colors.white + sg.opacity[90]};
  }

  &:hover .face-primary {
    margin-top: -${sg.spacing.xxxxxlarge};
  }
`
