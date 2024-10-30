import "./Hero.css"

const Hero = () => {
    return <div className="hero-container">
        <video src="https://www.volvocars.com/files/cs/v3/assets/blt618dcb179a89242d/blt67d06c56ca6d4f5b/6572f9b3cc2f77000dc17180/homepage-hero-video-desktop-21x9.mp4?branch=prod_alias" muted autoPlay loop style={{width: "100%"}}></video>
        <div>
            <h5>New era for safety</h5>
            <p>Does how you feel<br/>affect how you drive?</p>
            <button >Learn More</button>
        </div>
    </div>
}

export default Hero