import Header from '@/components/Header'

export default function PrintsipyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="heading-xl mb-6">
                Наши принципы
              </h1>
              <p className="text-body text-neutral-600 mb-8">
                Философия, по которой мы работаем. 
                Прямо и честно о том, как мы делаем мебель.
              </p>
            </div>
          </div>
        </section>

        {/* Манифест */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl">
              <h2 className="heading-lg mb-12 text-center">
                Манифест
              </h2>
              
              <div className="space-y-12">
                {/* Принцип 1 */}
                <div className="bg-neutral-50 rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="heading-md mb-4">Делаем с первого раза правильно</h3>
                      <p className="text-body text-neutral-600">
                        Не переделываем. Не исправляем. Делаем сразу качественно. 
                        Наша команда перфекционистов может целый день ровнять зазоры между фасадами, 
                        подгонять стыки, регулировать элементы. Мы не сдаем работу, пока не довольны сами.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Принцип 2 */}
                <div className="bg-neutral-50 rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="heading-md mb-4">Не бывает красиво, качественно и дешево</h3>
                      <p className="text-body text-neutral-600">
                        Выбирайте два из трех. Мы выбираем качество и красоту. 
                        Используем фурнитуру Blum (топ), столешницы каменные, кварц, акрил. 
                        Фасады в эмали, пластики антивандальные. Производители: Eger, Blum, Eterna.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Принцип 3 */}
                <div className="bg-neutral-50 rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="heading-md mb-4">Ценим свой труд и отвечаем за результат</h3>
                      <p className="text-body text-neutral-600">
                        Наша репутация важнее любой прибыли. Мы не впариваем - показываем работы. 
                        Не объясняем, не хвастаемся, не унижаемся. Просто делаем качественно и отвечаем за результат.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Кому не подойдем */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl">
              <h2 className="heading-lg mb-12 text-center">
                Кому мы не подойдем
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="heading-md mb-4">Ищущие самую дешевую цену</h3>
                  <p className="text-neutral-600">
                    Если вы прицениваетесь по всему городу и ищете самую низкую цену - мы не для вас. 
                    Мы делаем качественную мебель, а это стоит денег.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="heading-md mb-4">Не уважающие труд специалистов</h3>
                  <p className="text-neutral-600">
                    Если вы считаете, что вам все должны, и не цените профессионализм - 
                    мы не будем работать вместе. Мы ценим взаимное уважение.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="heading-md mb-4">Молодые дерзкие клиенты</h3>
                  <p className="text-neutral-600">
                    Мы работаем с людьми, которые понимают ценность качественной мебели 
                    и готовы платить за результат. Возраст не важен, важно отношение.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="heading-md mb-4">"Цари" и мудаки</h3>
                  <p className="text-neutral-600">
                    Если вы привыкли командовать и не умеете договариваться - 
                    мы не будем тратить время. Мы работаем с адекватными людьми.
                  </p>
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
                Если вы не из этих категорий
              </h2>
              <p className="text-body text-neutral-600 mb-8">
                И цените качество, профессионализм и взаимное уважение - 
                давайте обсудим ваш проект.
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