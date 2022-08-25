import React from 'react'

export const Nav = () => {
    return (
        <nav className={'nav'}>
            <a href="/" className={'logo'}>Car Rental</a>
            <ul>
                <li>
                    <a href="/locations">Locations</a>
                </li>
                <li>
                    <a href="/faq">Faq</a>
                </li>
            </ul>
        </nav>
    )
}