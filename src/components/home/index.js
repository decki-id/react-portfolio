import "./index.scss"
import LogoTitle from "../../assets/images/logo-s.png"
import AnimatedLetters from "../animated_letters"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["l", "o", "b", "o", "d", "a", "n"]
  const jobArray = ["w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", "."]

  useEffect(() => {
    setTimeout(() => { return setLetterClass("text-animate-hover") }, 4000)
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
      <div className="logo-container"><img src={LogoTitle} alt="S" width="400" height="630" /></div>
    </div>
  )
}

export default Home