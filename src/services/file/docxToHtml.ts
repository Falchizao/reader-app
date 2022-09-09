import mammoth from 'mammoth'

export const parseDocxToHtml = async (
  arrayBuffer: ArrayBuffer
): Promise<string> => {
  const { value } = await mammoth.convertToHtml({ arrayBuffer })
  return value
}
