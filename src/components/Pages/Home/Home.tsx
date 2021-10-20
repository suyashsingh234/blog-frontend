import React from 'react'
import { Editor } from './Editor'
import { Typography } from '@mui/material'
import { Appbar } from '../../Common/Appbar'

export const Home: React.FC<{}> = () => {
    return (
        <>
            <Appbar />
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
                <Typography variant='h6' color='inherit' component='div' style={{ color: '#442C2E', fontSize: '32px', cursor: 'pointer' }}>
                    draft YOUR thoughts below :))
                </Typography>
            </div>
            <Editor />
        </>
    )
}