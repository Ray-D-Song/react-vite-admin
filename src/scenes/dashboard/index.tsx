import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { mockTransactions } from '../../data/mockData'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'
import GeographyChart from '../../components/GeographyChart'
import BarChart from '../../components/BarChart'
import StatBox from '../../components/StatBox'
import ProgressCircle from '../../components/ProgressCircle'

const Dashboard = (): JSX.Element => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      {/* HEADER */}
      <Box display='flex' justifyContent='space-between' alignContent='center'>
        <Header title='DASHBOARD' subtitle='Welcome to you dashboard'/>

        <Box>
          <Button
            sx={{
              bgcolor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px'
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='140px'
        gap='20px'
      >
        {/* ROW 1 */}
        <Box
          gridColumn='span 3'
          bgcolor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox
            title='12,361'
            subtitle='Email sent'
            progress='0.75'
            increase='+14%'
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          >

          </StatBox>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
