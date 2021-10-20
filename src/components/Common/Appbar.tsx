import React from 'react'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import { useHistory } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import HelpIcon from '@mui/icons-material/Help'
import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material'

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
                    <Typography variant='h6' color='inherit' component='div' style={{ color: '#442C2E', fontSize: '48px', cursor: 'pointer' }} onClick={() => { history.push('/') }}>
                        Blog Post
                    </Typography>
                    <Tooltip title='Help' placement='bottom'>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: '0.5rem' }}>
                            <IconButton size='large' aria-label='show 1 notification' color='inherit' style={{ color: '#442C2E' }} onClick={() => { history.push('/help') }}>
                                <Badge badgeContent={1} color='error'>
                                    <HelpIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </>
    )
}