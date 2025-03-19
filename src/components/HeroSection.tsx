export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-12 text-center">
      <div className="max-w-xl mx-auto px-4">

        <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 leading-tight mb-4">
          Estagnado, Frustrado e Enrolado? <br />
          <span className="text-green-500">
            Seu Corpo Merece Mais {' '}
            <span className="text-white">
              que <br /> Falsas Promessas!
            </span>
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-6">
        Quebre o platô, veja resultados reais no espelho e deixe para trás as falsas promessas de 'gurus' que só querem seu dinheiro. 
        <span className="text-white">{' '} É hora de transformar seu físico com <strong>inteligência</strong> e <strong>eficácia</strong>.</span>
        </p>

        <img
          src="/assets/hero.png"
          alt="Homem segurando um peso"
          className="mx-auto mb-8 rounded-2xl shadow-2xl opacity-90 transition duration-300 hover:opacity-100"
        />

        <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
          QUERO ACESSAR AGORA
        </button>
      </div>
    </section>
  );
}