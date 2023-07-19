declare interface Starter {
  name: string
  slug: string
  description: string
  image?: string
  repo: string
  branch: string
  dir?: string
  demo?: string
  docs?: string
}

declare interface Theme extends Starter {
  studio?: boolean,
  shop?: string
}
