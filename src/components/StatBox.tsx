import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import ProgressCircle from './ProgressCircle'

interface StatBoxProps {
  title: string
  subtitle: string
  progress: string
  increase: string
  icon: JSX.Element
}

const StatBox = (props: StatBoxProps): JSX.Element => {
  return (
    <Box width='100%' m='0 30px'>
      <Box display='flex' justifyContent='space-between'>
        <Box>
          {icon}
          <Typography
            variant='h4'
            fontWeight='bold'
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
