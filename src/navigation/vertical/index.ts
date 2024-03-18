import type { VerticalNavItems } from '@/@layouts/types'

const PATH_PREFIX = '/admin'

export default [
  {
    title: 'Sample page',
    to: { path: `${PATH_PREFIX}/samplepage` },
    icon: { icon: 'tabler-file' },
  },
] as VerticalNavItems
