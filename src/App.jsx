
import './App.css'

function App() {
 

  return (
    <>
     <div className="container">
    <Header/>
    <Hero/>
    <ContentContainer/>
    <AbautMe/>
    <Booking/>
    <footer/>
     </div>
    </>
  )
}


function Header() {
  return(
    <div class="header">
    <a href="/index.html"><img src="/images/header-logo.svg" alt="Logo"/></a>
    <a href="#" class="header-btn">Free Consultation</a>
  </div>
  )
}

function Hero(){
  return(
<div class="hero">
      <h1>Design solutions made easy</h1>
      <p>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
    </div>
  )
}

function ContentContainer(){
  return(
  <div class="content-container">
      <div class="content"><img src="/images/graphicdeign-img.png"/>Graphic Design</div>
      <div class="content tek"><img src="/images/uiux-img.png"/>UI/UX</div>
      <div class="content tek"><img src="/images/apps-img.png"/>Apps</div>
      <div class="content"><img src="/images/Illustrations-img.png"/>Illustrations</div>
      <div class="content"><img src="/images/photography-img.png"/>Photography</div>
      <div class="content"><img src="/images/motiongraphic-img.png"/>Motion Graphics</div>
    </div>
  )
}

function AbautMe(){
  return(
  <div class="about-me">
      <img src="/images/aboutme-img.png" alt="Amy"/>
      <div class="about-me-description">
        <h2>I’m Amy, and I’d love to work on your next project</h2>
        <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
        <a href="#" class="about-me-btn">Free Consultation</a>
      </div>
    </div>
  )
}

function Booking(){
  return(
  <div class="booking">
      <div class="booking-description">
        <h2>Book a call with me</h2>
        <p>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
      </div>
      <a href="#" class="booking-btn">Free Consultation</a>
    </div>
  )
}

function Footer(){
  return(
  <div class="footer">
      <a href="/index.html"><img src="/images/mobilelogo.svg" alt="Logo" /></a>
      <a href="#" class="header-btn">Free Consultation</a>
    </div>
  )
}


export default App
