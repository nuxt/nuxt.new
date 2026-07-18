import { readFile, writeFile } from 'node:fs/promises'
import { compile } from 'json-schema-to-typescript'

const root = new URL('../', import.meta.url)
const schema = JSON.parse(await readFile(new URL('template.schema.json', root), 'utf8'))

const ts = await compile({ ...schema, title: 'Starter' }, 'Starter', {
  bannerComment: '// Generated from template.schema.json by `pnpm generate:types`. Do not edit manually.',
  additionalProperties: false,
  style: {
    semi: false,
    singleQuote: true,
  },
})

await writeFile(new URL('shared/types/index.ts', root), ts)
