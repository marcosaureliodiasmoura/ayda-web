'use client';
import { useState } from "react";

export default function FAQSection() {
  // Array com perguntas e respostas
  const faqs = [
    {
      question: "O que é o Ayda?",
      answer: "Ayda é um aplicativo de treino inteligente que utiliza inteligência artificial para personalizar rotinas de exercícios, otimizando ganhos musculares e prevenindo lesões através de análises comportamentais detalhadas.",
    },
    {
      question: "Como o Ayda personaliza os treinos?",
      answer: "O Ayda analisa seus dados de treino, incluindo séries, repetições e cargas, para ajustar automaticamente suas rotinas, garantindo que cada treino seja adaptado às suas necessidades específicas e nível de condicionamento físico.",
    },
    {
      question: "O Ayda é adequado para iniciantes?",
      answer: "Sim, o Ayda é projetado para todos os níveis de experiência, oferecendo suporte e feedback detalhados para iniciantes, intermediários e avançados na prática de musculação.",
    },
    {
      question: "Quais são os dispositivos compatíveis com o Ayda?",
      answer: "O aplicativo Ayda está disponível para smartphones Android e iOS, proporcionando flexibilidade e acessibilidade para a maioria dos usuários.",
    },
    {
      question: "O pagamento é seguro?",
      answer: "Sim, existem duas formas de pagamento, você pode efetuar a compra pela loja de aplicativos ou por meio da Kiwify prosseguindo por este endereço. Sim, 100% seguro. A transação é realiza pela kiwify, uma plataforma segura e totalmente livre de riscos.",
    },
    {
      question: "Como funciona após o pagamento via Kiwify?",
      answer: "Realizando o pagamento pela Kiwify, você receberá um código de acesso para ser incluído ao acessar a sua conta no aplicativo AYDA em configurações.",
    },
    {
      question: "Como o Ayda ajuda a prevenir lesões?",
      answer: "Ayda inclui guias em vídeo para corrigir a técnica e personaliza séries de aquecimento baseadas na carga, tudo projetado para minimizar o risco de lesões durante o treino.",
    },
    {
      question: "Como o Ayda monitora meu progresso?",
      answer: "O Ayda fornece comparativos entre sessões de treino (ex: Semana 2 vs Semana 4) e feedback em tempo real, permitindo que você veja sua evolução e ajuste suas metas conforme necessário.",
    },
    {
      question: "Posso cancelar minha assinatura mensal do Ayda a qualquer momento?",
      answer: "Sim, a assinatura do Ayda pode ser cancelada a qualquer momento, diretamente através das configurações do aplicativo ou da loja de aplicativos do seu dispositivo. válido apenas para planos mensais.",
    },
    {
      question: "Como posso entrar em contato com o suporte do Ayda?",
      answer: "Você pode entrar em contato com a equipe de suporte do Ayda através do aplicativo, por e-mail ou através das nossas redes sociais para obter assistência rápida e eficiente.",
    },
  ];

  // Estado para controlar o índice da pergunta aberta
  const [openIndex, setOpenIndex] = useState(null);

  // Função para alternar o índice aberto
  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-2xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>

        {/* Lista de FAQs */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <summary className="font-semibold flex justify-between items-center">
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-gray-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}