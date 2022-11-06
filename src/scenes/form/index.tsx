import React, { ReactElement } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'
import { useTranslation } from 'react-i18next'
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: ''
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('required'),
  address1: yup.string().required('required'),
  address2: yup.string().required('required')
})

interface ValuesType {
  firstName: string
  lastName: string
  email: string
  contact: string
  address1: string
  address2: string
}

const Form = (): ReactElement => {
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const { t, i18n } = useTranslation()

  const handleFormSubmit = (values: ValuesType): void => {
    console.log(values)
  }

  return (
    <Box m='20px'>
      <Header title={t("Form.title")} subtitle={t("Form.subtitle")} />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4, minmax(0, 1fr))'
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' }
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Form.firstname")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!(touched.firstName ?? false) && !(errors.firstName == null)}
                helperText={(touched.firstName === true) && errors.firstName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Form.lastname")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!(touched.lastName ?? false) && !(errors.lastName == null)}
                helperText={(touched.lastName ?? false) && errors.lastName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Form.email")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!(touched.email ?? false) && !(errors.email == null)}
                helperText={(touched.email ?? false) && errors.email}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Form.contactnumber")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!(touched.contact ?? false) && !(errors.contact == null)}
                helperText={(touched.contact ?? false) && errors.contact}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Form.address1")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!(touched.address1 ?? false) && !(errors.address1 == null)}
                helperText={(touched.address1 ?? false) && errors.address1}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Form.address2")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!(touched.address2 ?? false) && !(errors.address2 == null)}
                helperText={(touched.address2 ?? false) && errors.address2}
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
              {t("Form.button")}
              </Button>
            </Box>
          </form>
        )
        }
      </Formik>
    </Box>
  )
}

export default Form
