import React from 'react'
import './card.styles.css'

export const Card = ({ monster : { id, name, email} }) => {
    return (
        <div className="card-container">
            <img alt="" src={`https://robohash.org/${id}?set=set1&size=180x180`} />
            <h1>{name}</h1>
            <h3>{email}</h3>
        </div>

    )
}