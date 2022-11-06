import React, { ReactElement } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataInvoices } from '../../data/mockData'
import Header from '../../components/Header'
import { useTranslation } from 'react-i18next'

const Invoices = (): ReactElement => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { t, i18n } = useTranslation()
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: t("Invoices.name"),
      flex: 1,
      cellClassName: 'name-column--cell'
    },
    {
      field: 'phone',
      headerName: t("Invoices.phonenumber"),
      flex: 1
    },
    {
      field: 'email',
      headerName: t("Invoices.email"),
      flex: 1
    },
    {
      field: 'cost',
      headerName: t("Invoices.cost"),
      flex: 1,
      renderCell: (params: any) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      )
    },
    {
      field: 'date',
      headerName: t("Invoices.date"),
      flex: 1
    }
  ]

  return (
    <Box m="20px">
    <Header title={t("Invoices.title")} subtitle={t("Invoices.subtitle")} />
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        '& .MuiDataGrid-root': {
          border: 'none'
        },
        '& .MuiDataGrid-cell': {
          borderBottom: 'none'
        },
        '& .name-column--cell': {
          color: colors.greenAccent[300]
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: colors.blueAccent[700],
          borderBottom: 'none'
        },
        '& .MuiDataGrid-virtualScroller': {
          backgroundColor: colors.primary[400]
        },
        '& .MuiDataGrid-footerContainer': {
          borderTop: 'none',
          backgroundColor: colors.blueAccent[700]
        },
        '& .MuiCheckbox-root': {
          color: `${colors.greenAccent[200]} !important`
        }
      }}
    >
      <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
    </Box>
  </Box>
  )
}

export default Invoices
