'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function UslugiPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [progress, setProgress] = useState(0)

  const checklist = [
    {
      category: "Розетки и электрика",
      questions: [
        "Есть ли розетки в зоне кухни?",
        "Достаточно ли мощности для подключения техники?",
        "Проведена ли отдельная линия для мощной техники?",
        "Установлены ли УЗО для безопасности?"
      ]
    },
    {
      category: "Вода и канализация",
      questions: [
        "Подведена ли холодная вода?",
        "Есть ли горячая вода или бойлер?",
        "Проведена ли канализация?",
        "Установлены ли запорные краны?"
      ]
    },
    {
      category: "Вентиляция и газ",
      questions: [
        "Есть ли вентиляционный канал?",
        "Проведен ли газ (если планируется газовая плита)?",
        "Установлен ли газовый счетчик?",
        "Есть ли доступ к вентиляционной решетке?"
      ]
    },
    {
      category: "Геометрия помещения",
      questions: [
        "Стены ровные (перепад не более 2 см)?",
        "Пол ровный (перепад не более 1 см)?",
        "Потолок готов (не планируется подвесной)?",
        "Дверные проемы стандартные?"
      ]
    },
    {
      category: "Техника и материалы",
      questions: [
        "Куплена ли вся техника?",
        "Выбраны ли столешницы и фасады?",
        "Определена ли фурнитура?",
        "Есть ли место для хранения материалов?"
      ]
    }
  ]

  const packages = [
    {
      name: "Lite",
      price: "30 000₽",
      duration: "48 часов",
      description: "Базовый пакет для простых кухонь",
      features: [
        "Замер и составление ТЗ",
        "Дизайн-проект кухни",
        "Подбор материалов и фурнитуры",
        "Производство мебели",
        "Монтаж и установка"
      ]
    },
    {
      name: "Standard",
      price: "50 000₽",
      duration: "72 часа",
      description: "Оптимальный пакет для большинства проектов",
      features: [
        "Все из пакета Lite",
        "Сложный дизайн с островом",
        "Встроенная техника премиум-класса",
        "Подсветка и дополнительные аксессуары",
        "Гарантийное обслуживание 2 года"
      ]
    },
    {
      name: "Pro",
      price: "80 000₽",
      duration: "120 часов",
      description: "Премиум пакет для сложных проектов",
      features: [
        "Все из пакета Standard",
        "Индивидуальный дизайн",
        "Эксклюзивные материалы",
        "Умная техника и автоматизация",
        "Пожизненная гарантия"
      ]
    }
  ]

  const examples = [
    {
      id: 1,
      title: "Кухня с островом в Ялте",
      description: "Современная кухня с островом и встроенной техникой",
      image: "/example-1.jpg"
    },
    {
      id: 2,
      title: "Кухня-гостиная в Краснодаре",
      description: "Объединение кухни и гостиной в единое пространство",
      image: "/example-2.jpg"
    },
    {
      id: 3,
      title: "Классическая кухня в Сочи",
      description: "Традиционная кухня с современной функциональностью",
      image: "/example-3.jpg"
    },
    {
      id: 4,
      title: "Минималистичная кухня в Крыму",
      description: "Чистые линии и максимум функциональности",
      image: "/example-4.jpg"
    }
  ]

  const handleAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer }
    setAnswers(newAnswers)
    
    // Рассчитываем прогресс
    const totalQuestions = checklist.reduce((sum, category) => sum + category.questions.length, 0)
    const answeredQuestions = Object.keys(newAnswers).length
    const progressPercent = Math.round((answeredQuestions / totalQuestions) * 100)
    setProgress(progressPercent)
  }

  const getProblemAreas = () => {
    const problems: string[] = []
    
    checklist.forEach((category, categoryIndex) => {
      category.questions.forEach((question, questionIndex) => {
        const questionId = `${categoryIndex}-${questionIndex}`
        const answer = answers[questionId]
        
        if (answer === 'no') {
          problems.push(question)
        }
      })
    })
    
    return problems
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              {/* Геометка */}
              <div className="mb-8">
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">
                  Крым → работаем по Краснодару
                </span>
              </div>
              
              <h1 className="heading-xl mb-6">
                Сделайте ремонт без переделок
              </h1>
              <p className="text-body text-neutral-600 mb-8">
                Чек-лист готовности к монтажу кухни. Избежите ошибок и переделок.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Показать примеры
                </button>
                <a 
                  href="https://wa.me/79001234567?text=Здравствуйте! Хочу обсудить монтаж кухни"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl">
              <h2 className="heading-lg mb-8 text-center">
                Готовы ли Вы к монтажу кухни?
              </h2>
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-neutral-700">Готовность</span>
                  <span className="text-sm font-medium text-neutral-700">{progress}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div 
                    className="bg-neutral-900 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Checklist Form */}
              <div className="space-y-12">
                {checklist.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="heading-md mb-6">{category.category}</h3>
                    
                    <div className="space-y-4">
                      {category.questions.map((question, questionIndex) => {
                        const questionId = `${categoryIndex}-${questionIndex}`
                        const answer = answers[questionId]
                        
                        return (
                          <div key={questionIndex} className="bg-white rounded-xl p-6">
                            <p className="font-medium text-neutral-900 mb-4">{question}</p>
                            
                            <div className="flex gap-4">
                              {['yes', 'no', 'unsure'].map((option) => (
                                <label key={option} className="flex items-center gap-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    name={questionId}
                                    value={option}
                                    checked={answer === option}
                                    onChange={() => handleAnswer(questionId, option)}
                                    className="w-4 h-4 text-neutral-900 border-neutral-300 focus:ring-neutral-500"
                                  />
                                  <span className="text-sm text-neutral-700">
                                    {option === 'yes' ? 'Да' : option === 'no' ? 'Нет' : 'Не уверен'}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Problem Areas */}
              {getProblemAreas().length > 0 && (
                <div className="mt-12 bg-red-50 rounded-2xl p-8">
                  <h3 className="heading-md mb-4 text-red-900">Проблемные места</h3>
                  <ul className="space-y-2">
                    {getProblemAreas().map((problem, index) => (
                      <li key={index} className="flex items-start gap-2 text-red-700">
                        <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <span className="text-sm">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="heading-lg mb-4">
                Пакеты услуг
              </h2>
              <p className="text-body text-neutral-600">
                Выберите подходящий пакет для вашего проекта
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={`bg-white rounded-2xl p-8 ${index === 1 ? 'ring-2 ring-neutral-900' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="heading-md mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-neutral-900 mb-1">{pkg.price}</div>
                    <div className="text-sm text-neutral-600">{pkg.duration}</div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-neutral-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <button className="btn-primary w-full">
                      Заказать
                    </button>
                    <a 
                      href={`https://wa.me/79001234567?text=Здравствуйте! Интересует пакет ${pkg.name} за ${pkg.price}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="heading-lg mb-4">
                Примеры работ
              </h2>
              <p className="text-body text-neutral-600">
                Посмотрите, как выглядят наши кухни в реальных проектах
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {examples.map((example) => (
                <div key={example.id} className="group cursor-pointer">
                  <div className="aspect-[4/3] bg-neutral-100 rounded-2xl mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                      <svg className="w-16 h-16 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-neutral-900 mb-1">{example.title}</h3>
                  <p className="text-sm text-neutral-600">{example.description}</p>
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
                Готовы начать проект?
              </h2>
              <p className="text-body text-neutral-600 mb-8">
                Пройдите чек-лист и свяжитесь с нами для обсуждения вашего проекта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Обсудить проект
                </button>
                <a 
                  href="https://wa.me/79001234567?text=Здравствуйте! Хочу обсудить монтаж кухни"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 