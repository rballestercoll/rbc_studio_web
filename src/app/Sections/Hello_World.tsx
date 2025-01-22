const HelloWorld = () => {
    return (
      <section
        id="hello-world"
        className="h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-32"
      >
        <h2 className="text-5xl font-bold mb-6">//Hello World</h2>
        <p className="text-lg max-w-2xl text-center mb-10">
          At RBC Studio, we believe in merging design and programming. We take an
          agile, collaborative approach that lets us deeply understand each
          project, iterate quickly, and deliver outstanding results.
        </p>
        <button className="py-2 px-6 border border-white rounded-md hover:bg-white hover:text-black">
          About us
        </button>
      </section>
    );
  };
  
  export default HelloWorld;
  