import React from 'react'

import { FaFileDownload } from 'react-icons/fa'

import * as S from './styles'

type DownloadButtonProps = {
  href: string

  bytesAmount?: number
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  bytesAmount = 0,
  ...rest
}) => {
  return (
    <S.FaceButton href={href} download {...rest}>
      <div className='face-primary'>
        <FaFileDownload />
        Download
      </div>

      <div className='face-secondary'>
        <FaFileDownload />
        Size: {bytesAmount} bytes
      </div>
    </S.FaceButton>
  )
}
