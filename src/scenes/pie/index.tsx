import React, { ReactElement } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'
import { useTranslation } from 'react-i18next'

const Pie = (): ReactElement => {
  const { t, i18n } = useTranslation()
  return (
    <Box m="20px">
      <Header title={t("Pie.title")} subtitle={t("Pie.subtitle")} />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie
