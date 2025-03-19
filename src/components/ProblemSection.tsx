export default function ProblemSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-4">Meses de Treino, Zero Resultados? 🥲</h2>
          <p className="text-gray-700 mb-4">
            Você conhece bem essa sensação: meses de dedicação na academia, e no espelho nada muda. É frustrante!
          </p>
          <p className="text-gray-700">
            Mais do que esforço físico, você precisa de uma estratégia personalizada, sem falsas promessas. Imagine atingir
            seus objetivos sem enrolação, com resultados reais!
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <img
            src="/images/problem.jpg"
            alt="Pessoa pensativa na academia"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}