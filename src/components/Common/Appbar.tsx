import React from 'react'
import { useHistory } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

export const Appbar: React.FC<{ back?: boolean}> = ({ back }) => {
    let history = useHistory()
    return (
        <>
            <AppBar position='static'>
                <Toolbar variant='dense' style={{ backgroundColor: '#FEDBD0', height: '100px' }}>
                    { back ? (
                        <>
                            <IconButton
                                style={{ color: '#442C2E', margin: '1rem', padding: '0.5rem' }}
                                size='large'
                                edge='start'
                                color='inherit'
                                aria-label='menu'
                                sx={{ mr: 2 }}
                                onClick={() => {
                                    history.goBack()
                                }}
                            >
                                <ArrowBack />
                            </IconButton>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                    <Typography variant='h6' color='inherit' component='div' style={{ color: '#442C2E', fontSize: '48px' }}>
                        Blog Post
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}