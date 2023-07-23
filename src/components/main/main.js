function Main() {
  return (
    <main>
      <section className="firstSection">
        <div className="leftSection">
          Hi, AM <span className="purple">Suryakant</span>
          <span id="element"></span>
        </div>
        <div className="rightSection">
          <img src="dev.png.png" alt="" />
        </div>
      </section>
      <hr />
      <section className="secondsection">
        <div className="about-section">
          <div className="social-links">
            <h4>connect with me</h4>
            <div>
              <div>
                <img src="img" width="220" height="220" />
              </div>
            </div>
          </div>
          <div className="about-me">
            <h3>About Me</h3>
            <p>
              I am a web developer with an amazing experience in creating and
              designing web pages. I am a Computer Science Engineer.
            </p>
            <div className="personalinfo">
              <div>
                <span>Name: </span>
                <span>Suryakant Tyagi</span>
              </div>
              <div>
                <span>Age: </span>
                <span>20</span>
              </div>
              <div>
                <span>Email: </span>
                <span>suryakant28.st@gmail.com</span>
              </div>
              <div>
                <span>Address: </span>
                <span>A-20, Chandrapuri, Mathura</span>
              </div>
            </div>
            <div className="button">
              <button className="download">Download CV</button>
            </div>
          </div>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/direct/inbox/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="+917089272128" target="_blank">
            <i className="fa-solid fa-address-book"></i>
          </a>
          <a href="+917089272128" target="_blank">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Main;
