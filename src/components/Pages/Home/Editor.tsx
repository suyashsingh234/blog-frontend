import React, { useState } from 'react'
import Button from '@mui/material/Button'
import EditorJs from 'react-editor-js'
import { EDITOR_TOOLS } from './editor'

export const Editor: React.FC<{}> = () => {
    const [data, setData] = useState()
    return (
        <>
            <div style={{ border: '1px solid black', backgroundColor: '#fff', margin: '2rem' }}>
                <EditorJs data={data} tools={EDITOR_TOOLS} onChange={(api: any, data: any) => { setData(data.blocks) }} />
            </div>
            <div style={{ margin: 'auto', width: '10%' }}>
                <Button
                    variant='contained'
                    onClick={() => {
                        console.log(data)
                    }}
                    style={{
                        backgroundColor: '#FEDBD0',
                        color: '#442C2E'
                    }}
                >
                    Contained
                </Button>
            </div>
        </>
    )
}