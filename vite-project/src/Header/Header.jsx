import logo from "../images/logo_header.svg"
function Header(){
  return(
<header className="header">
        <img
          src= {logo}
          alt="Logo Around the US"
          className="header__logo"
        />
        <hr className="line" />
</header>
);
}

export default Header;
