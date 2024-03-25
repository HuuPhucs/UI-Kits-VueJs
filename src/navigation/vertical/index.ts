import type { VerticalNavItems } from '@/@layouts/types'

const PATH_admin = '/admin'
const PATH_LandingPage= '/LandingPage'

export default [
  {
    title: 'Sample page',
    to: { path: `${PATH_admin}/samplepage` },
    icon: { icon: 'tabler-file' },
  },
] as VerticalNavItems
