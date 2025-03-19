export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Você Vai Levar Tudo Isso...</h2>
        <ul className="space-y-4">
          <li>✅ Plano de Evolução com IA</li>
          <li>✅ Análise Comportamental</li>
          <li>✅ Comparativo entre Treinos</li>
          <li>✅ Gestão de Rotinas</li>
        </ul>
        <p className="text-green-500 font-bold text-2xl mt-8">
          Apenas 12x de R$9,90 ou R$97,00 à vista
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4">
          ADQUIRA AGORA
        </button>
      </div>
    </section>
  );
}