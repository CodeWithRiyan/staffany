import React from 'react'

type PropsButton = {
    variant: 'success' | 'danger' | 'primary'
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ variant, children, onClick }: PropsButton) => (
    <button className={`btn ${variant}`} onClick={onClick}>
        {children}
    </button>
)

export default Button
