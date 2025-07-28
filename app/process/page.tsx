import Header from '@/components/Header'

export default function ProcessPage() {
  const steps = [
    {
      id: 1,
      title: "Вводные",
      subtitle: "Замер, обсуждение, ТЗ",
      duration: "1-2 дня",
      description: "Выезжаем на объект, обсуждаем задачи, составляем техническое задание",
      details: [
        "Контрольный замер помещения",
        "Обсуждение задач и пожеланий",
        "Составление технического задания",
        "Предварительная оценка стоимости"
      ],
      icon: "📐"
    },
    {
      id: 2,
      title: "Проект",
      subtitle: "Дизайн, согласование, производство",
      duration: "30-35 дней",
      description: "Создаем дизайн-проект, согласовываем с клиентом и запускаем в производство",
      details: [
        "Создание дизайн-проекта",
        "Согласование с клиентом",
        "Закупка материалов",
        "Производство мебели"
      ],
      icon: "🎨"
    },
    {
      id: 3,
      title: "Монтаж",
      subtitle: "Установка, настройка, сдача",
      duration: "10-15 дней",
      description: "Устанавливаем мебель, настраиваем все элементы и сдаем проект",
      details: [
        "Доставка на объект",
        "Монтаж и установка",
        "Настройка фурнитуры",
        "Финальная сдача проекта"
      ],
      icon: "🔧"
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
                Как мы работаем
              </h1>
              <p className="text-body text-neutral-600 mb-8">
                От первого звонка до сдачи проекта за 45 рабочих дней. 
                Системный подход без суеты.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl">
              <div className="space-y-16">
                {steps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Step Number */}
                    <div className="absolute -left-4 top-0 w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.id}
                    </div>

                    <div className="bg-neutral-50 rounded-2xl p-8 ml-8">
                      <div className="flex items-start gap-6">
                        <div className="text-4xl">{step.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <h3 className="heading-md">{step.title}</h3>
                            <span className="inline-flex items-center rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                              {step.duration}
                            </span>
                          </div>
                          <h4 className="font-semibold text-neutral-700 mb-3">{step.subtitle}</h4>
                          <p className="text-body text-neutral-600 mb-6">{step.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start gap-2">
                                <svg className="w-4 h-4 text-neutral-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm text-neutral-600">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-4 top-8 w-0.5 h-16 bg-neutral-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Info */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="heading-lg mb-8">
                Общие сроки
              </h2>
              
              <div className="bg-white rounded-2xl p-8 mb-8">
                <div className="text-4xl font-bold text-neutral-900 mb-4">45 рабочих дней</div>
                <p className="text-body text-neutral-600 mb-6">
                  От контрольного замера до сдачи проекта
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="font-semibold text-neutral-900 mb-2">Вводные</div>
                    <div className="text-neutral-600">1-2 дня</div>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-2">Проект</div>
                    <div className="text-neutral-600">30-35 дней</div>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-2">Монтаж</div>
                    <div className="text-neutral-600">10-15 дней</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8">
                  <h3 className="heading-md mb-4">Системный подход</h3>
                  <p className="text-neutral-600">
                    Не переходим к этапу 2, пока не сделан этап 1. 
                    Каждый этап завершается полной сдачей результата.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8">
                  <h3 className="heading-md mb-4">Долгосрочные проекты</h3>
                  <p className="text-neutral-600">
                    Можем работать годами, пока дом строится. 
                    Адаптируемся под ваши сроки и планы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Info */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl">
              <h2 className="heading-lg mb-12 text-center">
                Наша команда
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Монтажники</h3>
                  <p className="text-sm text-neutral-600">
                    Перфекционисты - могут целый день ровнять зазоры между фасадами, 
                    подгонять стыки, регулировать элементы
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Технолог</h3>
                  <p className="text-sm text-neutral-600">
                    Стабильный, усидчивый, дотошный. Отвечает за качество 
                    производства и соблюдение технологий
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Снабженец</h3>
                  <p className="text-sm text-neutral-600">
                    Пунктуальный. Обеспечивает своевременную поставку 
                    качественных материалов и фурнитуры
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Дизайнер 1</h3>
                  <p className="text-sm text-neutral-600">
                    Творческая зависимость, работает с утра до ночи. 
                    Создает уникальные дизайн-проекты
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Дизайнер 2</h3>
                  <p className="text-sm text-neutral-600">
                    Обаятельный, начитанный. Общается с клиентами, 
                    презентует проекты и ведет переговоры
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Руководитель</h3>
                  <p className="text-sm text-neutral-600">
                    Харизматичный стрелец. Координирует работу команды 
                    и отвечает за результат
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="heading-lg mb-6">
                Готовы начать проект?
              </h2>
              <p className="text-body text-neutral-600 mb-8">
                Наша команда готова создать для вас качественную мебель 
                в установленные сроки.
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