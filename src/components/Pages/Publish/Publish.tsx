import React from 'react'
import { useFormik } from 'formik'
import { Appbar } from '../../Common/Appbar'
import { useAppSelector } from '../../../redux/hooks'
import { TextField, Button, Grid } from '@mui/material'

export const Publish: React.FC<{}> = () => {
    const blog = useAppSelector((state) => state.BlogState.blog)
    const formik = useFormik({
        initialValues: {
          mediumToken: '',
          mediumAuth: '',
          devToken: '',
          devAuth: '',
          hashnodeToken: '',
          hashnodeAuth: ''
        },
        onSubmit: (values: any) => {
          console.log(values)
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
                                <h1 style={{ color: '#442C2E' }}>Put in your tokens below</h1>
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
                                    id='mediumToken'
                                    name='mediumToken'
                                    label='Medium Token'
                                    variant='outlined'
                                    onChange={formik.handleChange}
                                    value={formik.values.mediumToken}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    style={{ margin: '1rem' }}
                                    id='mediumAuth'
                                    name='mediumAuth'
                                    label='Medium Auth Token'
                                    variant='outlined'
                                    onChange={formik.handleChange}
                                    value={formik.values.mediumAuth}
                                />
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
                                    id='devToken'
                                    name='devToken'
                                    label='Dev.to Token'
                                    variant='outlined'
                                    onChange={formik.handleChange}
                                    value={formik.values.devToken}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    style={{ margin: '1rem' }}
                                    id='devAuth'
                                    name='devAuth'
                                    label='Dev.to Auth'
                                    variant='outlined'
                                    onChange={formik.handleChange}
                                    value={formik.values.devAuth}
                                />
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
                                    id='hashnodeToken'
                                    name='hashnodeToken'
                                    label='Hash node Token'
                                    variant='outlined'
                                    onChange={formik.handleChange}
                                    value={formik.values.hashnodeToken}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    style={{ margin: '1rem' }}
                                    id='hashnodeAuth'
                                    name='hashnodeAuth'
                                    label='Hash node Auth'
                                    variant='outlined'
                                    onChange={formik.handleChange}
                                    value={formik.values.hashnodeAuth}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <div style={{ margin: 'auto', width: '10%' }}>
                        <Button
                            variant='contained'
                            onClick={() => {
                                console.log('Hello')
                            }}
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