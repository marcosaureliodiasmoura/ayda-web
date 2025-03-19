export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-black">
          Por Dentro do <span className="text-green-500">AYDA</span>
        </h2>
        
        <div className="flex flex-col items-center mb-8">
          <img
            src="/assets/hero.png"
            alt="Pessoa pensativa na academia"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
          <p className="text-gray-600 mt-4 text-center">
            Descubra como o <span className="font-semibold text-green-500">AYDA</span> pode revolucionar seus treinos com inteligência artificial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {/* Cartões de Recursos */}
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 w-42 h-42 py-8 px-4 rounded-2xl shadow-md text-center transform transition-transform hover:scale-105">
            <h3 className="text-3xl mb-4">🧠</h3>
            <p className="text-gray-100">Plano de Evolução com IA</p>
          </div>

          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 w-42 h-42 py-8 px-4 rounded-2xl shadow-md text-center transform transition-transform hover:scale-105">
            <h3 className="text-3xl mb-4">💪</h3>
            <p className="text-gray-100">Progressão de Carga Inteligente</p>
          </div>

          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 w-42 h-42 py-8 px-4 rounded-2xl shadow-md text-center transform transition-transform hover:scale-105">
            <h3 className="text-3xl mb-4">🛠️</h3>
            <p className="text-gray-100">Ferramentas Inteligentes</p>
          </div>

          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 w-42 h-42 py-8 px-4 rounded-2xl shadow-md text-center transform transition-transform hover:scale-105">
            <h3 className="text-3xl mb-4">📈</h3>
            <p className="text-gray-100">Comparativo Entre Treinos</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="w-md bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg">
            Descubra Mais
          </button>
        </div>
      </div>
    </section>
  );
}