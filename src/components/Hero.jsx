function Hero({ title, image, children }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-bg">
          <img src={image} alt="header background Image" />
        </div>
        <div className="header-content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
