// Generated from template.schema.json by `pnpm generate:types`. Do not edit manually.

export interface Starter {
  $schema?: string
  /**
   * Template identifier: the JSON filename (without extension), prefixed with the parent directory name for nested templates (e.g. `ui/chat.json` -> `ui-chat`).
   */
  name: string
  /**
   * Human-readable display name. Falls back to `name` when omitted.
   */
  label?: string
  description?: string
  /**
   * Icon for the template, as a URL or data URI.
   */
  image?: string
  /**
   * Marks the recommended default template.
   */
  default?: boolean
  /**
   * Deprecated templates are hidden from listings but remain installable.
   */
  deprecated?: boolean
  /**
   * Default directory name for the created project.
   */
  defaultDir?: string
  /**
   * Documentation or homepage for the template.
   */
  url?: string
  /**
   * Tarball URL for the template contents.
   */
  tar: string
  /**
   * GitHub repository in `owner/repo` form. Must match `tar`.
   */
  repo: string
  /**
   * Branch within `repo` containing the template. Must match `tar`.
   */
  branch: string
}
