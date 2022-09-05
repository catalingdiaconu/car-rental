import React, { useState } from 'react'

export const PopupUJ = () => {

    const [modalState, setModalState] = useState(false)

    const openModal = () => {
        setModalState(true)
    }

    const closeModal = () => {
        setModalState(false)
    }

    return (
        <div>
            <span>Or open and follow our User Journey to find the perfect car for you</span>
            <button onClick={openModal}>Open</button>
            { modalState === true ?
                <dialog open className={'userJourney'}>
                    <button onClick={closeModal}>Close</button>
                </dialog> : <div> </div>}
        </div>
    )
}