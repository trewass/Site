'use client'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'

export default function KeisyPage() {
  const router = useRouter()
  const cases = [
    {
      id: 1,
      title: "Кухня в Ялте - история успеха",
      location: "Ялта, Крым",
      client: "Семья из 4 человек",
      budget: "1 200 000 ₽",
      duration: "45 дней",
      challenge: "Нужна была современная кухня с островом для большой семьи, которая любит готовить и принимать гостей. Пространство было ограниченным, но хотелось функциональности и стиля.",
      solution: "Создали кухню в стиле минимализм с большим островом, встроенной техникой премиум-класса и продуманной системой хранения. Использовали фасады в эмали и столешницу из кварца.",
      result: "Клиенты в восторге от результата. Кухня стала центром дома - здесь готовят, едят, общаются. Все продумано до мелочей, техника спрятана, но легко доступна.",
      testimonial: "Александр, как думаете, будет красиво? - Да, будет красиво, вы будете хлопать в ладоши. И мы действительно хлопали!",
      image: "/case-kitchen.jpg",
      projectUrl: "/projects/kitchen-modern-1"
    },
    {
      id: 2,
      title: "Гардероб в Сочи - организация пространства",
      location: "Сочи, Краснодарский край",
      client: "Предприниматель 45 лет",
      budget: "800 000 ₽",
      duration: "40 дней",
      challenge: "Клиент хотел организовать хранение большой коллекции одежды и аксессуаров. Нужна была система, которая не только вместит все, но и будет удобной в использовании.",
      solution: "Спроектировали встроенный гардероб с системой выдвижных ящиков, вешалок разной высоты, полками для обуви и аксессуаров. Добавили зеркала и подсветку.",
      result: "Теперь все вещи на своих местах, легко найти нужное. Гардероб выглядит как в бутике, но функциональность превзошла ожидания.",
      testimonial: "Наконец-то я знаю, где что лежит! И выглядит все очень статусно.",
      image: "/case-wardrobe.jpg",
      projectUrl: "/projects/wardrobe-case-2"
    },
    {
      id: 3,
      title: "Дом под ключ в Крыму - комплексный подход",
      location: "Крым",
      client: "Семья с детьми",
      budget: "3 500 000 ₽",
      duration: "6 месяцев",
      challenge: "Нужно было обставить весь дом - кухню, гардеробы, ванные, гостиную. Важно было создать единый стиль во всех помещениях и учесть потребности каждого члена семьи.",
      solution: "Разработали концепцию для всего дома, создали единый стиль. Кухня стала центром, гардеробы организованы под каждого, ванные функциональны и красивы.",
      result: "Дом получился уютным и функциональным. Каждое помещение продумано до мелочей, но все в едином стиле. Клиенты говорят, что дом стал настоящим домом.",
      testimonial: "Теперь мы действительно живем, а не существуем в доме. Все продумано для комфорта.",
      image: "/case-house.jpg",
      projectUrl: "/projects/full-house-complex"
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="heading-xl mb-6">
                Наши кейсы
              </h1>
              <p className="text-body text-neutral-600 mb-8">
                Развернутые истории наших проектов. 
                От задачи до результата - как мы решаем сложные вопросы.
              </p>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="space-y-24">
              {cases.map((caseItem) => (
                <div key={caseItem.id} className="bg-neutral-50 rounded-2xl p-8 group cursor-pointer hover:shadow-lg transition-all duration-200" onClick={() => router.push(caseItem.projectUrl)}>
                  {/* Case Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="heading-lg group-hover:text-neutral-700 transition-colors">{caseItem.title}</h2>
                      <span className="inline-flex items-center rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        {caseItem.location}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-neutral-900">Клиент:</span>
                        <span className="text-neutral-600 ml-2">{caseItem.client}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900">Бюджет:</span>
                        <span className="text-neutral-600 ml-2">{caseItem.budget}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900">Срок:</span>
                        <span className="text-neutral-600 ml-2">{caseItem.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Case Image */}
                  <div className="aspect-[16/9] bg-neutral-100 rounded-xl mb-8 overflow-hidden group-hover:scale-[1.02] transition-transform duration-200">
                    <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                      <svg className="w-16 h-16 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Case Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Задача</h3>
                      <p className="text-neutral-600 leading-relaxed">{caseItem.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Решение</h3>
                      <p className="text-neutral-600 leading-relaxed">{caseItem.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Результат</h3>
                      <p className="text-neutral-600 leading-relaxed">{caseItem.result}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-8 p-6 bg-white rounded-xl border border-neutral-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-neutral-600 italic mb-2">"{caseItem.testimonial}"</p>
                        <p className="text-sm text-neutral-500">— Клиент</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 text-center">
                    <span className="btn-primary inline-block">
                      Смотреть детали проекта
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="heading-lg mb-6">
                Хотите такую же историю успеха?
              </h2>
              <p className="text-body text-neutral-600 mb-8">
                Расскажите о своем проекте, и мы создадим для вас 
                качественную мебель с продуманным дизайном.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Обсудить проект
                </button>
                <button className="btn-secondary">
                  Посмотреть работы
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 