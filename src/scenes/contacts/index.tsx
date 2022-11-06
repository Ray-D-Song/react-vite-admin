import React, { ReactElement } from 'react'
import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'
import { useTranslation } from 'react-i18next'

const Contacts = (): ReactElement => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { t, i18n } = useTranslation()

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: t("Contact.registrar") },
    {
      field: 'name',
      headerName: t("Contact.name"),
      flex: 1,
      cellClassName: 'name-column--cell'
    },
    {
      field: 'age',
      headerName: t("Contact.age"),
      type: 'number'
    },
    {
      field: 'phone',
      headerName: t("Contact.phonenumber"),
      flex: 1
    },
    {
      field: 'email',
      headerName: t("Contact.email"),
      flex: 1
    },
    {
      field: 'address',
      headerName: t("Contact.address"),
      flex: 1
    },
    {
      field: 'city',
      headerName: t("Contact.city"),
      flex: 1
    },
    {
      field: 'zipCode',
      headerName: t("Contact.zip"),
      flex: 1
    }
  ]

  return (
    <Box m='20px'>
      <Header
        title={t("Contact.title")}
        subtitle={t("Contact.subtitle")}
      />
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
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`
          }
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Contacts
