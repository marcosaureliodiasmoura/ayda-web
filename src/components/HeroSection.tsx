// Adicionar font family Montserrat
// Tamanho dos textos
// cores 

export default function HeroSection() {
  return (
    <section className="bg-purple-900 text-white py-16 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h1 className="text-[25px] font-bold mb-4 text-[#ff4d4d]">
          Estagnado, Frustrado e Enrolado? <br />
          <span className="text-[#4caf50]">Seu Corpo Merece Mais {' '}
            <span className="text-white">
              que <br/> Falsas Promessas!
            </span>
          </span>
        </h1>
        <p className="text-lg mb-8">
          Descubra como milhares de pessoas estão superando desafios, vendo resultados reais e atingindo o corpo dos sonhos!
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">
          QUERO ACESSAR AGORA
        </button>
      </div>
    </section>
  );
}