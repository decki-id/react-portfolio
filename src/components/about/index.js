import "./index.scss"
import Loader from "react-loaders"
import AnimatedLetters from "../animated_letters"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { faNodeJs, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => { setTimeout(() => { return setLetterClass("text-animate-hover") }, 3000) }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={["A", "b", "o", "u", "t", " ", "M", "e"]} idx={15} />
          </h1>
          <p>
            I am a very ambitious Front-End Developer looking for a role in established IT company with
            the opportunity to work with the latest technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on improving my chops
            one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family person, father of a
            beautiful daughter, a sports fanatic, photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#38761d" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4444" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About