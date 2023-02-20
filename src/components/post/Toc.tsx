type Props = {
  toc: {
    id: string
    depth: number
    value: string
  }[]
  activeItemIds: string[]
  handleClose: () => void
}

export default function Toc({ toc, activeItemIds, handleClose }: Props) {
  return <>Toc</>
}
