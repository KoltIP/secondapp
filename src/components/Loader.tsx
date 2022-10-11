import React from 'react'

interface LoaderProps{
    loading: boolean
}

export function Loader({loading}:LoaderProps)
{
    return (
        <div>
             { loading && <p className="text-center"> Loading... </p> }
        </div>
    )
}