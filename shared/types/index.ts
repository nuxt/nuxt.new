export interface Starter {
  name: string
  slug: string
  default?: boolean
  description: string
  image?: string
  tar: string
  repo: string
  branch: string
  defaultDir?: string
  url?: string
  deprecated?: boolean
}
