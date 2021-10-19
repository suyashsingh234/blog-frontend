import React, { useState } from 'react'
import Button from '@mui/material/Button'
import EditorJs from 'react-editor-js'
import { EDITOR_TOOLS } from './editor'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useAppSelector } from '../../../redux/hooks'
import { BlogStateActions } from '../../../redux/slices/BlogState'

export const Editor: React.FC<{}> = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const [data, setData] = useState(useAppSelector((state) => state.BlogState.blog))
    return (
        <>
            <div style={{ border: '1px solid black', backgroundColor: '#fff', margin: '2rem' }}>
                <EditorJs
                    data={data}
                    tools={EDITOR_TOOLS}
                    onChange={
                        (api: any, data: any) => {
                            setData(data)
                        }
                    }
                />
            </div>
            <div style={{ margin: 'auto', width: '10%' }}>
                <Button
                    variant='contained'
                    onClick={() => {
                        dispatch(BlogStateActions.set_blog(data))
                        history.push('/publish')
                    }}
                    style={{
                        backgroundColor: '#FEDBD0',
                        color: '#442C2E',
                        marginBottom: '3rem'
                    }}
                >
                    Publish
                </Button>
            </div>
        </>
    )
}