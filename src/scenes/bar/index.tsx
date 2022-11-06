import React, { ReactElement } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import BarChart from '../../components/BarChart'
import { useTranslation } from 'react-i18next'

const Bar = (): ReactElement => {
  const { t, i18n } = useTranslation()
  return (
    <Box m="20px">
      <Header title={t("Bar.title")} subtitle={t("Bar.subtitle")} />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  )
}

export default Bar
