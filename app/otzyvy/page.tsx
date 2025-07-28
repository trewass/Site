import Header from '@/components/Header'

export default function OtzyvyPage() {
  const testimonials = [
    {
      id: 1,
      name: "Елена и Сергей",
      location: "Ялта, Крым",
      project: "Кухня с островом",
      rating: 5,
      text: "Александр, как думаете, будет красиво? - Да, будет красиво, вы будете хлопать в ладоши. И мы действительно хлопали! Кухня получилась потрясающей - функциональной, красивой и удобной. Каждый день радуемся результату.",
      videoUrl: "/testimonial-1.mp4",
      image: "/client-1.jpg"
    },
    {
      id: 2,
      name: "Анна",
      location: "Сочи, Краснодарский край",
      project: "Гардеробная комната",
      rating: 5,
      text: "Наконец-то я знаю, где что лежит! И выглядит все очень статусно. Гардероб организован идеально - все вещи на своих местах, легко найти нужное. Спасибо за профессионализм!",
      videoUrl: "/testimonial-2.mp4",
      image: "/client-2.jpg"
    },
    {
      id: 3,
      name: "Михаил",
      location: "Краснодар",
      project: "Дом под ключ",
      rating: 5,
      text: "Теперь мы действительно живем, а не существуем в доме. Все продумано для комфорта. Каждое помещение функционально и красиво. Команда работает на совесть.",
      videoUrl: "/testimonial-3.mp4",
      image: "/client-3.jpg"
    },
    {
      id: 4,
      name: "Ольга",
      location: "Крым",
      project: "Ванная комната",
      rating: 5,
      text: "Ванная получилась не только красивой, но и очень функциональной. Все продумано до мелочей - от хранения косметики до подсветки. Качество работы на высоте.",
      videoUrl: null,
      image: "/client-4.jpg"
    },
    {
      id: 5,
      name: "Дмитрий",
      location: "Геленджик",
      project: "Кухня премиум-класса",
      rating: 5,
      text: "Не бывает красиво, качественно и дешево - это точно про нашу кухню. Красиво и качественно получилось на 100%. Спасибо за профессионализм и внимание к деталям.",
      videoUrl: "/testimonial-5.mp4",
      image: "/client-5.jpg"
    },
    {
      id: 6,
      name: "Татьяна",
      location: "Крым",
      project: "Гардероб и ванная",
      rating: 5,
      text: "Сделали гардероб и ванную - все в едином стиле, все функционально. Команда работает как часы - все в срок, все качественно. Рекомендую всем!",
      videoUrl: null,
      image: "/client-6.jpg"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-neutral-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="heading-xl mb-6">
                Отзывы наших клиентов
              </h1>
              <p className="text-body text-neutral-600 mb-8">
                Что говорят о нас люди, для которых мы создавали мебель. 
                Реальные истории и впечатления.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-neutral-50 rounded-2xl p-8">
                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{testimonial.name}</h3>
                      <p className="text-sm text-neutral-600">{testimonial.location}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mb-6">
                    <span className="inline-flex items-center rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Video Placeholder */}
                  {testimonial.videoUrl && (
                    <div className="aspect-video bg-neutral-100 rounded-xl mb-6 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                        <div className="text-center">
                          <svg className="w-12 h-12 text-neutral-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm text-neutral-500">Видео отзыв</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Testimonial Text */}
                  <div className="relative">
                    <svg className="absolute -top-2 -left-2 w-8 h-8 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-neutral-600 leading-relaxed pl-6">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="heading-lg mb-12">
                Наши результаты
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-neutral-900 mb-2">100%</div>
                  <div className="text-caption">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neutral-900 mb-2">5.0</div>
                  <div className="text-caption">средняя оценка</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neutral-900 mb-2">150+</div>
                  <div className="text-caption">реализованных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neutral-900 mb-2">3</div>
                  <div className="text-caption">года на рынке</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="heading-lg mb-6">
                Хотите стать следующим довольным клиентом?
              </h2>
              <p className="text-body text-neutral-600 mb-8">
                Присоединяйтесь к нашим клиентам, которые уже наслаждаются 
                качественной мебелью от Александра Кожа.
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