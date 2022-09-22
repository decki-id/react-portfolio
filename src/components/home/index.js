import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LogoTitle from "../../assets/images/logo-s.png"
import AnimatedLetters from "../animated_letters"
import "./index.scss"
import Logo from "./logo"

const Home = () => {
    const
        [letterClass, setLetterClass] = useState("text-animate"),
        nameArray = ["l", "o", "b", "o", "d", "a", "n"],
        jobArray = ["w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", "."]

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _12`}>,</span>
                    <br />
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _12`}>'</span>
                    <span className={`${letterClass} _12`}>m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Front End Developer | JavaScript Expert | YouTuber</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home