import React, { ReactElement } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'
import { useTranslation } from 'react-i18next'

const Line = (): ReactElement => {
  const { t, i18n } = useTranslation()
  return (
    <Box m="20px">
    <Header title={t("Line.title")} subtitle={t("Line.subtitle")} />
    <Box height="75vh">
      <LineChart />
    </Box>
  </Box>
  )
}

export default Line
