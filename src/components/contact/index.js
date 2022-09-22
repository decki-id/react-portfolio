import emailjs from "@emailjs/browser"
import { useEffect, useRef, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import Loader from "react-loaders"
import AnimatedLetters from "../animated_letters"
import "./index.scss"

const Contact = () => {
    const
        [letterClass, setLetterClass] = useState("text-animate"),
        refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm("gmail", "", refForm.current, "").then(() => {
            alert("Message sent successfully.")
            window.location.reload(false)
        }, () => {
            alert("Failed to send the message, please try again.")
        })
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]} idx={15} />
                    </h1>
                    <p>
                        I am interested in freelance opportunities, especially ambitious or large projects. However, if you have other
                        request or question, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required autoFocus />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Slobodan Gajic,
                    <br />
                    Serbia,
                    <br />
                    Branka RadiCevica 19, 22000
                    <br />
                    Sremska Mitrovica
                    <br />
                    <span>freelancerslobodan@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact