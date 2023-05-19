import dynamic from "next/dynamic"

export default dynamic(
  () => import('./ResultComponent'),
  { ssr: false }
)