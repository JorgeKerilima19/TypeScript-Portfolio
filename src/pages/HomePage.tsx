import "./styles/home.css";

export const HomePage = () => {
  return (
    <section className="section__homepage">
      <div className="homepage-container">
        <h2 className="homepage-subtitle">Hello World</h2>
        <h1 className="homepage-title">
          I am <span>Jorge</span> Quispe
        </h1>
        <p>Self-taught frontend developer seeking a full-stack career</p>
      </div>
      <div className="homepage-container">
        <img className="homepage__img" src="../../assets/1.jpg" alt="" />
      </div>
    </section>
  );
};
