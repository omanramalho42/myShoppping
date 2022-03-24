import { Button, List, ListItem, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CheckoutWizard from '../components/CheckoutWizard'
import Layout from '../components/Layout'
import Form from '../components/Form'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Store } from '../utils/Store'
import Cookies from 'js-cookie'

export default function ShippingScreen() {

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues
  } = useForm()

  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const {
    userInfo,
    cart: { shippingAddress },
  } = state
  const { location } = shippingAddress

  useEffect(() => {
    if (!userInfo) {
      return router.push('/login?redirect=/shipping')
    }

    setValue('address', shippingAddress.address)
    setValue('fullName', shippingAddress.fullName)
    setValue('city', shippingAddress.city)
    setValue('postalCode', shippingAddress.postalCode)
    setValue('country', shippingAddress.country)

    // if(location != undefined || location != 'undefined') {
    //   setValue('address', `${location?.name} , ${location?.vicinity}`)
    // }
    
  }, [router, setValue, shippingAddress, userInfo, location])

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country, location },
    })
    Cookies.set(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
        location
      })
    )
    router.push('/payment')
  }

  const chooseLocationHandler = () => {
    const fullName = getValues('fullName');
    const address = getValues('address');
    const city = getValues('city');
    const postalCode = getValues('postalCode');
    const country = getValues('country');
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set('shippingAddress', {
      fullName,
      address,
      city,
      postalCode,
      country,
      location,
    });
    router.push('/map');
  };

  return (
    <Layout title="Endereço de envio">
      <CheckoutWizard activeStep={1}></CheckoutWizard>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Typography component="h1" variant="h1">
          Endereço de envio
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="fullName"
                  label="Nome completo"
                  inputProps={{ type: 'fullName' }}
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === 'minLength'
                        ? 'Nome completo tem que ser maior que 1 caractere'
                        : 'Nome completo é obrigatório'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Endereço"
                  inputProps={{ type: 'address' }}
                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === 'minLength'
                        ? 'Endereço tem que ser maior que 1 caractere'
                        : 'Endereço é obrigatório'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="city"
                  label="Cidade"
                  inputProps={{ type: 'city' }}
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === 'minLength'
                        ? 'Cidade tem que ser maior que 1 caractere'
                        : 'Cidade é obrigatória'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="postalCode"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="postalCode"
                  label="Cep"
                  inputProps={{ type: 'postalCode' }}
                  error={Boolean(errors.postalCode)}
                  helperText={
                    errors.postalCode
                      ? errors.postalCode.type === 'minLength'
                        ? 'Cep tem que ser maior que 1 caractere'
                        : 'Cep é obrigatória'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="postalCode"
                  label="País"
                  inputProps={{ type: 'country' }}
                  error={Boolean(errors.country)}
                  helperText={
                    errors.country
                      ? errors.country.type === 'minLength'
                        ? 'País tem que ser maior que 1 caractere'
                        : 'País é obrigatório'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <Button
                variant="contained"
                type="button"
                onClick={chooseLocationHandler}
            >
                Escolher no mapa
            </Button>
            <Typography>
                {location?.lat && `${location?.lat}, ${location?.lat}`}
            </Typography>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Continuar
            </Button>
          </ListItem>
        </List>
      </Form>
    </Layout>
  )
}
