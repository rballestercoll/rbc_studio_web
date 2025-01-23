const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row justify-between items-center px-8 md:px-16 lg:px-32"
    >
      {/* Columna izquierda con el título */}
      <div className="flex-1">
        <h1 className="text-9xl font-bold">
          rbc <span className="block">Studio</span>
        </h1>
      </div>

      {/* Columna derecha con el párrafo */}
      <div className="flex-1">
        <p className="text-lg text-justify">
          We are a multiplatform development brand shaping the future of digital
          experiences through our original products. Driven by innovation and
          creativity, we craft immersive solutions that merge technology with
          artistry—elevating how we interact with the digital world.
        </p>
      </div>
    </section>
  );
};

export default Hero;
