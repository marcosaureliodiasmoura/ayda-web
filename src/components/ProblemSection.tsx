export default function ProblemSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-screen-lg mx-auto flex flex-wrap items-center px-12">
        {/* Texto da seção */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Meses de Treino, <span className="text-rose-600">Zero Resultados? 😔</span>
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <span className="underline font-bold text-gray-900">Você conhece bem essa sensação:</span>
            {' '} meses de dedicação na academia, suor e esforço, mas quando olha no espelho, parece que nada mudou. 😔
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            A sensação de estar preso em uma rotina sem resultados é desanimadora. Mas saiba que você não está sozinho — e há uma solução para isso.
          </p>

          <div className="mt-8">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-md">
              Descubra Como Mudar Isso
            </button>
          </div>
        </div>

        {/* Imagem da seção */}
        <div className="w-full md:w-1/2 px-4">
          <div className="relative">
            <img
              src="/assets/hero.png"
              alt="Pessoa pensativa na academia"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}