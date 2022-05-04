// import './navbar.css'

export default function Root(props) {
  return (
    <header>
      <section className="header-icons-container">
        <div className="icons">
          <a href="/"><span className="fimanager flaticon-001-facebook">Home</span></a>
          <a href="/settings"><span className="fimanager flaticon-002-twitter">Settings</span></a>
        </div>
      </section>
      <nav>
        <section className="nav-logo-container">
          <a href="/"
          ><img src="./assets/img/Logo-negro.png" alt="Logo de mi blog"
            /></a>
        </section>
        <section className="profile-link">
          <a href="profile.html">About {props.myProp}</a>
        </section>
      </nav>
    </header>
  );
}
