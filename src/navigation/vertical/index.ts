import type { VerticalNavItems } from '@/@layouts/types'

const PATH_admin = '/admin'
const PATH_LandingPage= '/LandingPage'

export default [
  {
    title: 'List Hotel',
    to: { path: `${PATH_admin}/Manage` },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'List Book',
    to: { path: `${PATH_admin}/BookARoom` },
    icon: { icon: 'tabler-file' },
  },
] as VerticalNavItems
