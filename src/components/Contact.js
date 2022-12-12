import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
    return (
        <div style={{ padding: "2rem", paddingLeft: "20%" }}>
            <h1 style={{ textDecorationLine: "underline" }}>Contact Us:</h1>
            <h3 style={{ paddingTop: "1.5rem" }}>☎️: (254) 234 5280</h3>
            <h3>
                <FontAwesomeIcon icon={faEnvelope}/>:kendi.martha@student.moringaschool.com </h3>
        </div>
    )
}
