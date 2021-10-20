import React from 'react'
import { useFormik } from 'formik'
import { Api } from '../../../Api'
import { Field, FormikProvider } from 'formik'
import { Appbar } from '../../Common/Appbar'
import { useAppSelector } from '../../../redux/hooks'
import { ChipInput } from 'material-ui-formik-components'
import { TextField, Button, Grid, Typography } from '@mui/material'

export const Publish: React.FC<{}> = () => {
    const blog = useAppSelector((state) => state.BlogState.blog)
    const formik = useFormik({
        initialValues: {
          title: '',
          tags: [],
          mediumToken: '',
          devtoToken: '',
          hashnodeToken: ''
        },
        onSubmit: async (values: any) => {
            console.log(values)
            await Api.publishArticle(blog, values.title, values.tags, values.hashnodeToken, values.mediumToken, values.devtoToken)
        },
    })
    return (
        <>
            <Appbar back={ true } />
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container style={{ margin: '3rem' }}>
                        <Grid
                            container
                            direction='row'
                            justifyContent='center'
                        >
                            <Grid item xs={6}>
                                <h1 style={{ color: '#442C2E' }}>Little more information about the blog!</h1>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction='row'
                            justifyContent='center'
                        >
                            <Grid item xs={3}>
                                <TextField
                                    style={{ margin: '1rem' }}
                                    id='title'
                                    name='title'
                                    label='Blog Title'
                                    variant='outlined'
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                    required
                                />
                            </Grid>
                            <FormikProvider value={formik}>
                                <Grid item xs={3}>
                                    <Field
                                        component={ChipInput}
                                        label='Blog tags'
                                        variant='outlined'
                                        {...formik.getFieldProps('tags')}
                                    />
                                </Grid>
                            </FormikProvider>
                        </Grid>
                        <Grid
                            container
                            direction='row'
                            justifyContent='center'
                        >
                            <Grid item xs={3}>
                                <Typography variant='h4' component='div' gutterBottom style={{ color: '#442C2E', marginTop: '1.5rem' }}>Medium Token:</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    style={{ margin: '1rem' }}
                                    id='mediumToken'
                                    name='mediumToken'
                                    label='Medium Token'
                                    variant='outlined'
                                    onChange={formik.handleChange}
                                    value={formik.values.mediumToken}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction='row'
                            justifyContent='center'
                        >
                            <Grid item xs={3}>
                                <Typography variant='h4' component='div' gutterBottom style={{ color: '#442C2E', marginTop: '1.5rem' }}>Dev.to Token:</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    style={{ margin: '1rem' }}
                                    id='devtoToken'
                                    name='devtoToken'
                                    label='Dev.to Token'
                                    variant='outlined'
                                    onChange={formik.handleChange}
                                    value={formik.values.devtoToken}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction='row'
                            justifyContent='center'
                        >
                            <Grid item xs={3}>
                                <Typography variant='h4' component='div' gutterBottom style={{ color: '#442C2E', marginTop: '1.5rem' }}>Hashnode Token:</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    style={{ margin: '1rem' }}
                                    id='hashnodeToken'
                                    name='hashnodeToken'
                                    label='Hash node Token'
                                    variant='outlined'
                                    onChange={formik.handleChange}
                                    value={formik.values.hashnodeToken}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <div style={{ margin: 'auto', width: '10%' }}>
                        <Button
                            variant='contained'
                            type='submit'
                            style={{
                                backgroundColor: '#FEDBD0',
                                color: '#442C2E',
                                marginBottom: '3rem'
                            }}
                        >
                            Lessgo!
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}