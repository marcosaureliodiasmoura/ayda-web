export default function FAQSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
        <div>
          <details className="bg-gray-800 p-4 mb-2 rounded-lg">
            <summary className="font-bold">O que é o AYDA?</summary>
            <p className="text-gray-400 mt-2">
              AYDA é um aplicativo baseado em IA para personalizar o seu treino e dieta.
            </p>
          </details>
          <details className="bg-gray-800 p-4 mb-2 rounded-lg">
            <summary className="font-bold">Como funciona o plano?</summary>
            <p className="text-gray-400 mt-2">
              Você receberá um plano personalizado baseado nos seus objetivos.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}