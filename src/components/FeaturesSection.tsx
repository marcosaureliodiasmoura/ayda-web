export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Por Dentro do Aplicativo: AYDA</h2>
        <div className="flex justify-center mb-8">
          <img src="/images/app-preview.png" alt="Preview do aplicativo AYDA" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold mb-2">Balance de Macronutrientes</h3>
            <p className="text-gray-600">Gerenciamento detalhado da sua dieta.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold mb-2">Análise Comportamental</h3>
            <p className="text-gray-600">Entenda seus hábitos.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold mb-2">Gestão de Rotinas</h3>
            <p className="text-gray-600">Otimize seu tempo na academia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}