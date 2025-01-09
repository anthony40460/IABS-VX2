import React from 'react';

const faqs = [
  {
    question: "Comment démarrer avec vos services ?",
    answer: "Commencez par prendre contact avec nous pour un audit gratuit. Nous analyserons vos besoins et vous proposerons une solution adaptée. La mise en place peut commencer dès la semaine suivante."
  },
  {
    question: "Quelle est la durée minimale d'engagement ?",
    answer: "Nos forfaits Start commencent à 6 mois, tandis que les forfaits Growth et Premium nécessitent un engagement de 12 mois pour garantir un accompagnement optimal et des résultats durables."
  },
  {
    question: "Comment assurez-vous la sécurité des données ?",
    answer: "Nous respectons strictement le RGPD et utilisons des technologies de chiffrement avancées. Vos données sont stockées en Europe et nous signons systématiquement des accords de confidentialité."
  },
  {
    question: "Quel est le délai de mise en place ?",
    answer: "La mise en place initiale prend généralement 2 à 4 semaines, incluant l'audit, la formation et le déploiement des premiers outils. Le planning est adapté à vos contraintes."
  },
  {
    question: "Proposez-vous des formations sur mesure ?",
    answer: "Oui, toutes nos formations sont personnalisées en fonction de votre secteur d'activité, de vos objectifs et du niveau de vos équipes. Nous adaptons le contenu et le rythme à vos besoins."
  },
  {
    question: "Comment fonctionne le support technique ?",
    answer: "Notre support technique est disponible par chat, email et téléphone. Les clients Premium bénéficient d'un support 24/7 avec un temps de réponse garanti de moins d'une heure."
  }
];

export default function FAQSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Questions fréquentes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Retrouvez les réponses aux questions les plus courantes sur nos services.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white p-8 rounded-2xl shadow-sm">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}