export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Título da Seção */}
        <h2 className="text-3xl font-bold mb-8">Sobre a <span className="text-emerald-500">AYDA</span></h2>

        {/* Lista de Informações */}
        <ul className="text-left text-lg space-y-4 mb-8">
          <li>
            <span className="font-bold text-white">1. Atualmente:</span> estamos na <span className="text-emerald-500 underline">versão de lançamento</span>;
          </li>
          <li>
            <span className="font-bold text-white">2. O AYDA:</span> se tornará uma empresa de tecnologia;
          </li>
          <li>
            <span className="font-bold text-white">3. Teremos:</span> um <span className="text-emerald-500 underline">plano investidor</span> para usuários que está em desenvolvimento;
          </li>
          <li>
            <span className="font-bold text-white">4. Processo de melhorias:</span> será contínuo;
          </li>
          <li>
            <span className="font-bold text-white">5. Novas funcionalidades:</span> serão incluídas;
          </li>
        </ul>

        {/* Nota para o Futuro */}
        <p className="italic text-gray-300 text-base mb-12">
          <span>Para o futuro:</span> seremos exemplo de liderança, processos de desenvolvimento e respeito entre pessoas.
        </p>

        {/* Garantia */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-12">
          <p className="text-2xl font-bold mb-4">
            Garantimos <span className="text-emerald-500">resultados poderosos</span> sem comprometer sua rotina.
          </p>
          <p className="text-gray-300 text-base">
            Rotina de treino desenvolvido para praticantes naturais, com foco no aumento de força e hipertrofia.
          </p>
        </div>

        {/* Botão de Ação */}
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-12 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          QUERO ACESSAR AGORA
        </button>
      </div>
    </section>
  );
}