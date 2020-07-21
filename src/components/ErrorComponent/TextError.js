import React from 'react'

function TextError({children}) {
    return (
        <div className="red-text right">
            {children}
        </div>
    )
}

export default TextError
