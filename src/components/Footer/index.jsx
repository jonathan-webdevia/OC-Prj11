import logo_white from "../../assets/media/logo_white.png";

function Footer() {
  return (
    <footer>
      <img src={logo_white} alt="logo de l'agence"></img>
      <div className="copyrights">
        <span>&copy; 2020 Kasa. </span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
