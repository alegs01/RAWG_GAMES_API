import "./Footer.css";

const Footer = () => {
  return (
    /* Footer */
    <footer className="footer">
      <div className="div-footer-cr">
        <p className="logo-footer"><strong>Game</strong> Stats</p>
        <p className="text-footer">© 2024 Game Stats. All Rights Reserved.</p>
      </div>

      <div className="div-footer-terms">
        <ul>
          <li>
            <h6>Terminos</h6>
          </li>
          <li>
            <a href="./index.html">Politicas de privacidad</a>
          </li>
          <li>
            <a href="./index.html">Terminos y condiciones</a>
          </li>
        </ul>
      </div>

      <div className="div-footer-social">
        <ul>
          <li>
            <h6>Redes Sociales</h6>
          </li>
          <li>
            <i className="fab fa-discord"></i>
            <a className="socials" href="https://discord.com">
              Discord
            </a>
          </li>
          <li>
            <i className="fab fa-twitter"></i>
            <a className="socials" href="https://x.com/home">
              Twitter
            </a>
          </li>
          <li>
            <i className="fab fa-youtube"></i>
            <a className="socials" href="https://www.youtube.com">
              YouTube
            </a>
          </li>
          <li>
            <i className="fab fa-instagram"></i>
            <a className="socials" href="https://www.instagram.com">
              Instagram
            </a>
          </li>
          <li>
            <i className="fab fa-facebook"></i>
            <a className="socials" href="https://www.facebook.com">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
