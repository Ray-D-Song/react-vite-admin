import React, { ReactElement } from 'react'
import { Box, useTheme } from '@mui/material'
import GeographyChart from '../../components/GeographyChart'
import Header from '../../components/Header'
import { tokens } from '../../theme'
import { useTranslation } from 'react-i18next'

const Geography = (): ReactElement => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { t, i18n } = useTranslation()
  return (
    <Box m="20px">
      <Header title={t("Geography.title")} subtitle={t("Geography.subtitle")} />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography
