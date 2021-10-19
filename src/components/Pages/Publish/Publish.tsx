import React from 'react'
import { useAppSelector } from '../../../redux/hooks'
import { Appbar } from '../../Common/Appbar'

export const Publish: React.FC<{}> = () => {
    const blog = useAppSelector((state) => state.BlogState.blog)
    return (
        <>
            <Appbar back={ true } />
            <h1>Publish Page</h1>
        </>
    )
}