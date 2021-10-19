import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

function Appbar() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense" style={{ backgroundColor: '#FEDBD0', height: '100px' }}>
                <Typography variant="h6" color="inherit" component="div" style={{ color: '#442C2E', fontSize: '48px' }}>
                    Blog Post
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar
