import React, { ReactElement } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'

interface HeaderProps {
  title: string
  subtitle: string
}

const Header = (props: HeaderProps): ReactElement => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box mb='30px'>
      <Typography
        variant='h2'
        color={colors.grey[100]}
        fontWeight='bold'
        sx={{ m: '0 0 5px 0' }}
      >
        {props.title}
      </Typography>
      <Typography
        variant='h5'
        color={colors.greenAccent[400]}
      >
        {props.subtitle}
      </Typography>
    </Box>
  )
}

export default Header
