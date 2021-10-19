import React from 'react'
import { Editor } from './Editor'
import Appbar from '../../Common/Appbar'

export const Home: React.FC<{}> = () => {
    return (
        <>
            <Appbar />
            <Editor />
        </>
    )
}