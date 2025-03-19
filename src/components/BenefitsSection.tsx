export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-16 max-w-3xl">
        {/* Título */}
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Você vai levar <span className="text-emerald-500 underline">tudo isso...</span>
        </h2>

        {/* Lista de Benefícios */}
        <ul className="space-y-4">
          <li className="bg-gray-900 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3">
            <span className="text-2xl text-emerald-500">✅</span>
            <p className="text-lg">Plano de Evolução com <br /> Inteligência Artificial aprimorada</p>
          </li>
          <li className="bg-gray-900 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3">
            <span className="text-2xl text-emerald-500">✅</span>
            <p className="text-lg">Análise comportamental</p>
          </li>
          <li className="bg-gray-900 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3">
            <span className="text-2xl text-emerald-500">✅</span>
            <p className="text-lg">Comparativo entre treinos</p>
          </li>
          <li className="bg-gray-900 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3">
            <span className="text-2xl text-emerald-500">✅</span>
            <p className="text-lg">Progressão de carga inteligente</p>
          </li>
          <li className="bg-gray-900 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3">
            <span className="text-2xl text-emerald-500">✅</span>
            <p className="text-lg">Gestão de rotinas, bibliotecas de vídeos e mais...</p>
          </li>
        </ul>

        {/* Investimento */}
        <div className="mt-8 bg-[#013121] py-10 px-8 rounded-2xl shadow-2xl">
          <p className="text-white font-bold mb-2">Pelo investimento de:</p>
          <p className="text-4xl font-extrabold text-emerald-500 mb-4">
            <span className="text-white">Apenas</span>
            <span
              className="block text-[#03dc92] text-[63px]"
              style={{ textShadow: "0px 0px 8px #03dc92" }}
            >
              12x de R$9,90
            </span>
            <p className="text-[32px] text-white">ou R$97,00 à vista</p>
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-12 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            ADQUIRA AGORA
          </button>
        </div>

        {/* Informações sobre Pagamento */}
        <p className="text-gray-600 text-sm mt-6">
          Pagamento 100% seguro | Garantia de 7 dias
        </p>

        {/* Ícones de Pagamento */}
        <div className="flex justify-center items-center space-x-6 mt-4">
          <img
            src="/assets/kiwify.png"
            alt="Kiwify"
            className="h-6"
          />
          <img
            src="/assets/pix.png"
            alt="Pix"
            className="h-6"
          />
          <img
            src="/assets/visa.png"
            alt="Visa"
            className="h-6"
          />
          <img
            src="/assets/mastercard.png"
            alt="Mastercard"
            className="h-6"
          />
          <img
            src="/assets/paypal.png"
            alt="Paypal"
            className="h-6"
          />
        </div>
      </div>
    </section>
  );
}