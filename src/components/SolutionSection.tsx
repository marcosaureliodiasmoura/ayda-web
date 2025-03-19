export default function SolutionSection() {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      <div className="max-w-screen-lg mx-auto px-6 sm:px-12 text-center">
       
        <h2 className="text-4xl md:text-3xl font-extrabold text-white leading-tight mb-8 lg:px-48">
          <span className="text-emerald-500 underline">AYDA:</span>
          {' '} Seu parceiro inteligente para alcançar o físico dos seus sonhos.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-50 mb-12 max-w-3xl mx-auto">
          <div className="">
            <span className="text-emerald-500 text-3xl">1.</span>
            <p className="text-md px-10">Veja mudanças reais a cada semana.</p>
          </div>
          <div className="">
            <span className="text-emerald-500 text-3xl">2.</span>
            <p className="text-md px-10">Tenha um expert em IA analisando cada um dos seus movimentos.</p>
          </div>
          <div className="">
            <span className="text-emerald-500 text-3xl">3.</span>
            <p className="text-md px-10">Progrida de forma segura sem medo de lesões.</p>
          </div>
          <div className="">
            <span className="text-emerald-500 text-3xl">4.</span>
            <p className="text-md px-10">Confie em um aplicativo que trabalha com você, não contra você.</p>
          </div>
        </div>
        <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-20 rounded-lg shadow-lg transition-transform transform hover:scale-110">
          QUERO ACESSAR AGORA
        </button>
      </div>
    </section>
  );
}