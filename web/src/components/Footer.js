import logoAdalab from "../images/logo-adalab.png";
import "../styles/layout/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__copy">
          u<span className="required">·</span>n
          <span className="required">·</span>d
          <span className="required">·</span>e
          <span className="required">·</span>f
          <span className="required">·</span>i
          <span className="required">·</span>n
          <span className="required">·</span>e
          <span className="required">·</span>d &copy; 2021
        </section>
      </div>
      <section className="footer__logo">
        <a href="https://adalab.es/" target="_blank">
          <img className="img" src={logoAdalab} alt="Logo Adalab" />
        </a>
      </section>
    </footer>
  );
};
export default Footer;
