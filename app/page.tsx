'use client'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import StoriesAirtable from '@/components/StoriesAirtable'
import WorksSlider from '@/components/WorksSlider'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import CallbackForm from '@/components/CallbackForm'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

export default function Home() {
  const [showCallbackForm, setShowCallbackForm] = useState(false)
  const [selectedWork, setSelectedWork] = useState<any>(null)

  // Данные для слайдера работ
  const worksData = [
    {
      id: '1',
      title: 'Кухня в Ялте',
      description: 'Современная кухня с островом, выполненная в минималистичном стиле',
      image: 'https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Кухня+Ялта',
      category: 'Кухни',
      city: 'Ялта',
      duration: '45 дней',
      cost: 'от 850 тыс'
    },
    {
      id: '2',
      title: 'Гардероб в Сочи',
      description: 'Система хранения премиум-класса с продуманной эргономикой',
      image: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Гардероб+Сочи',
      category: 'Гардеробы',
      city: 'Сочи',
      duration: '30 дней',
      cost: 'от 600 тыс'
    },
    {
      id: '3',
      title: 'Ванная в Краснодаре',
      description: 'Функциональная ванная комната с современной сантехникой',
      image: 'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Ванная+Краснодар',
      category: 'Ванные',
      city: 'Краснодар',
      duration: '25 дней',
      cost: 'от 400 тыс'
    },
    {
      id: '4',
      title: 'Дом под ключ',
      description: 'Комплексное решение для всего дома - от кухни до гардеробных',
      image: 'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Дом+под+ключ',
      category: 'Дома под ключ',
      city: 'Севастополь',
      duration: '90 дней',
      cost: 'от 2 млн'
    }
  ]

  const handleWorkClick = (work: any) => {
    setSelectedWork(work)
  }

  return (
    <>
      <Header onCallbackClick={() => setShowCallbackForm(true)} />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 sm:py-32">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              {/* Геометка */}
              <div className="mb-8" data-aos="fade-down">
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">
                  Крым → работаем по Краснодару
                </span>
              </div>
              
              {/* Главный заголовок */}
              <h1 className="heading-xl mb-6" data-aos="fade-up" data-aos-delay="200">
                Мебель не для всех
              </h1>
              
              {/* Подзаголовок */}
              <p className="text-body mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                Дизайнерские кухни, гардеробы, ванные, дома под ключ. 
                Делаем с первого раза правильно.
              </p>
              
              {/* Кнопки */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="600">
                <a href="/raboty" className="btn-primary">
                  Смотреть работы
                </a>
                <button 
                  onClick={() => setShowCallbackForm(true)}
                  className="btn-secondary"
                >
                  Бесплатный замер
                </button>
              </div>
            </div>
          </div>
        </section>

             {/* Stories Section */}
     <StoriesAirtable />

        {/* Works Slider */}
        <WorksSlider works={worksData} onWorkClick={handleWorkClick} />

        {/* 3 СТОЛПА Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center mb-16" data-aos="fade-up">
              <h2 className="heading-lg mb-4">
                Три столпа нашей работы
              </h2>
              <p className="text-body text-neutral-600">
                Принципы, по которым мы создаем мебель
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* КОМФОРТ */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200" data-aos="fade-up" data-aos-delay="200">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="heading-md mb-3">Комфорт</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Мебель, с которой хочется жить
                  </p>
                </div>
              </div>

              {/* ЭРГОНОМИКА */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200" data-aos="fade-up" data-aos-delay="400">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="heading-md mb-3">Эргономика</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Каждый сантиметр продуман
                  </p>
                </div>
              </div>

              {/* СТАТУС */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200" data-aos="fade-up" data-aos-delay="600">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="heading-md mb-3">Статус</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Видно, что сделано на совесть
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* РАБОТЫ (тизер) */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="heading-lg mb-4">
                Наши работы
              </h2>
              <p className="text-body text-neutral-600">
                Посмотрите, что мы создаем для наших клиентов
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Карточка 1 */}
              <a href="/projects/kitchen-modern-1" className="group cursor-pointer block">
                <div className="aspect-[4/3] bg-neutral-100 rounded-2xl mb-4 overflow-hidden group-hover:shadow-lg transition-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-neutral-700 transition-colors">Кухня в Ялте</h3>
                <p className="text-sm text-neutral-600">Современная кухня с островом</p>
              </a>

              {/* Карточка 2 */}
              <a href="/projects/wardrobe-case-2" className="group cursor-pointer block">
                <div className="aspect-[4/3] bg-neutral-100 rounded-2xl mb-4 overflow-hidden group-hover:shadow-lg transition-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-neutral-700 transition-colors">Гардероб в Сочи</h3>
                <p className="text-sm text-neutral-600">Система хранения премиум-класса</p>
              </a>

              {/* Карточка 3 */}
              <a href="/projects/bathroom-furniture-3" className="group cursor-pointer block">
                <div className="aspect-[4/3] bg-neutral-100 rounded-2xl mb-4 overflow-hidden group-hover:shadow-lg transition-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-neutral-700 transition-colors">Ванная в Краснодаре</h3>
                <p className="text-sm text-neutral-600">Функциональная ванная комната</p>
              </a>
            </div>
            
            <div className="text-center">
              <a href="/raboty" className="btn-primary">
                Смотреть все работы
              </a>
            </div>
          </div>
        </section>

        {/* ПРИНЦИПЫ (тизер) */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="heading-lg mb-4">
                Наши принципы
              </h2>
              <p className="text-body text-neutral-600">
                Философия, по которой мы работаем
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-3">Делаем с первого раза правильно</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Не переделываем. Не исправляем. Делаем сразу качественно.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-3">Не бывает красиво, качественно и дешево</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Выбирайте два из трех. Мы выбираем качество и красоту.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-3">Ценим свой труд и отвечаем за результат</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Наша репутация важнее любой прибыли.
                </p>
              </div>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="800">
              <button 
                onClick={() => setShowCallbackForm(true)}
                className="btn-primary"
              >
                Заказать замер
              </button>
            </div>
          </div>
        </section>

        {/* ПРОЦЕСС (тизер) */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center mb-16" data-aos="fade-up">
              <h2 className="heading-lg mb-4">
                Как мы работаем
              </h2>
              <p className="text-body text-neutral-600">
                От первого звонка до сдачи проекта за 45 рабочих дней
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Этап 1 */}
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-neutral-600">1</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-3">Вводные</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Замер, обсуждение задач, составление ТЗ
                </p>
              </div>

              {/* Этап 2 */}
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-neutral-600">2</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-3">Проект</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Дизайн, согласование, производство
                </p>
              </div>

              {/* Этап 3 */}
              <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-neutral-600">3</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-3">Монтаж</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Установка, настройка, сдача проекта
                </p>
              </div>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="800">
              <button 
                onClick={() => setShowCallbackForm(true)}
                className="btn-secondary"
              >
                Рассчитать стоимость
              </button>
            </div>
          </div>
        </section>

        {/* Краткая информация */}
        <section className="py-16 bg-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl font-bold text-neutral-900 mb-2">15</div>
                <div className="text-caption">человек в команде</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="text-3xl font-bold text-neutral-900 mb-2">45</div>
                <div className="text-caption">дней от замера до сдачи</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                <div className="text-3xl font-bold text-neutral-900 mb-2">700к-1м</div>
                <div className="text-caption">средний чек кухни</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <Reviews />

        {/* FAQ */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onCallbackClick={() => setShowCallbackForm(true)} />

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Callback Form Modal */}
      {showCallbackForm && (
        <CallbackForm onClose={() => setShowCallbackForm(false)} />
      )}

      {/* Work Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-y-auto">
          <div className="min-h-screen flex items-start justify-center p-4">
            <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden mt-8">
              
              {/* Header */}
              <div className="bg-neutral-50 px-6 py-4 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900">
                      {selectedWork.title}
                    </h2>
                    <p className="text-neutral-600">{selectedWork.city} • {selectedWork.category}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedWork(null)}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-6">
                  <img 
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-neutral-900">О проекте</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {selectedWork.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-neutral-900">Срок:</span>
                      <div className="text-neutral-600">{selectedWork.duration}</div>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-900">Стоимость:</span>
                      <div className="text-neutral-600">{selectedWork.cost}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  <button 
                    className="btn-primary"
                    onClick={() => {
                      const message = `Здравствуйте! Хочу заказать проект похожий на "${selectedWork.title}" из города ${selectedWork.city}. Обсудим детали?`;
                      const whatsappUrl = `https://wa.me/79780000000?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Заказать похожий проект
                  </button>
                  <button 
                    className="btn-secondary"
                    onClick={() => setShowCallbackForm(true)}
                  >
                    Связаться с нами
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 