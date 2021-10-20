import React from 'react'
import { Typography } from '@mui/material'
import { Appbar } from '../../Common/Appbar'
import devto from '../../../images/devto.png'
import medium from '../../../images/medium.png'
import hashnode from '../../../images/hashnode.png'

export const Help: React.FC<{}> = () => {
    return (
        <>
            <Appbar />
            <p style={{ margin: '3rem' }} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h6' color='inherit' component='div' style={{ color: '#442C2E', fontSize: '32px', marginLeft: '3rem' }}>
                    How to get <a href='https://medium.com/'>Medium.com</a> token?
                </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={medium} alt="Medium.com Guide" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h6' color='inherit' component='div' style={{ color: '#442C2E', fontSize: '32px', marginLeft: '3rem' }}>
                    How to get <a href='https://hashnode.com/'>Hashnode</a> token?
                </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={hashnode} alt="Hashnode Guide" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h6' color='inherit' component='div' style={{ color: '#442C2E', fontSize: '32px', marginLeft: '3rem' }}>
                    How to get <a href='https://dev.to/'>Dev.to</a> token?
                </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={devto} alt="Dev.to Guide" />
            </div>
        </>
    )
}