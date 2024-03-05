
export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="container navbar__container">
          <div className="navbar__left">
            <a href=""><img className="navbar__logo-img" src="./imgs/troll.png" alt="" /></a>
            <a className="navbar__logo-text" href="">Meme Generator</a>
          </div>
          <div className="navbar__right">
            <p className="navbar__right-text">React Course - Project 3</p>
          </div>
        </div>
      </nav>
    </>
  );
}