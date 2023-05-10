import { useTranslation } from 'react-i18next'

import { Box } from 'src/elements'

import { 동물 as _별칭동물 } from './helpers'
import 나비행기아닌데 from './helpers/defaultExport'

export const Home = () => {
  const { t } = useTranslation()

  const a = 나비행기아닌데
  const b = _별칭동물

  return <Box>{t('Home')}</Box>
}
