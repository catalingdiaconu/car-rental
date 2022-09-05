import React from 'react'
import { FiUser } from 'react-icons/fi'

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
                <li>
                    <a href="/fleet">Fleet</a>
                </li>
                <li>
                    <a href="/login"><FiUser/></a>
                </li>
            </ul>
        </nav>
    )
}