'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallbackForm from '@/components/CallbackForm'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function ContactsPage() {
  const [showCallbackForm, setShowCallbackForm] = useState(false)

  return (
    <>
      <Header onCallbackClick={() => setShowCallbackForm(true)} />
      <main className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
              <h1 className="heading-xl mb-6">Контакты</h1>
              <p className="text-body text-neutral-600">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>
          </div>
        </section>

        {/* Контактная информация */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Левая колонка - Контакты */}
              <div data-aos="fade-right">
                <h2 className="heading-lg mb-8">Наши контакты</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-4">Адрес</h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-neutral-900 font-medium">г. Ялта, ул. Московская, 15</p>
                        <p className="text-neutral-600">Шоурум мебели "Александр Кожа"</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-4">Телефоны</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <a href="tel:+79780000000" className="text-neutral-900 font-medium hover:text-neutral-700 transition-colors">
                            +7 (978) 000-00-00
                          </a>
                          <p className="text-neutral-600 text-sm">Мобильный</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <a href="tel:+73650000000" className="text-neutral-900 font-medium hover:text-neutral-700 transition-colors">
                            +7 (365) 000-00-00
                          </a>
                          <p className="text-neutral-600 text-sm">Городской</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-4">Email</h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <a href="mailto:info@kozha-furniture.ru" className="text-neutral-900 font-medium hover:text-neutral-700 transition-colors">
                          info@kozha-furniture.ru
                        </a>
                        <p className="text-neutral-600 text-sm">Основной email</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-4">Режим работы</h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-neutral-900 font-medium">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-neutral-600 text-sm">Сб: 10:00 - 16:00, Вс: Выходной</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Правая колонка - Форма */}
              <div data-aos="fade-left">
                <h2 className="heading-lg mb-8">Напишите нам</h2>
                
                <div className="bg-neutral-50 rounded-2xl p-8">
                  <p className="text-neutral-600 mb-6">
                    Оставьте заявку и мы свяжемся с вами в течение 15 минут
                  </p>
                  
                  <button
                    onClick={() => setShowCallbackForm(true)}
                    className="w-full bg-neutral-900 text-white py-4 px-6 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Оставить заявку
                  </button>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-neutral-600 mb-4">Или свяжитесь через мессенджеры:</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="https://wa.me/79780000000?text=Здравствуйте! Хочу заказать мебель. Подскажите, как начать?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                      </a>
                      <a
                        href="https://t.me/kozha_furniture"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Карта */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center mb-12" data-aos="fade-up">
              <h2 className="heading-lg mb-4">Как нас найти</h2>
              <p className="text-body text-neutral-600">
                Мы находимся в центре Ялты, рядом с набережной
              </p>
            </div>
            
            <div className="bg-neutral-800 rounded-2xl p-8 h-96 flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center text-white">
                <svg className="w-16 h-16 text-neutral-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">г. Ялта, ул. Московская, 15</h3>
                <p className="text-neutral-400">
                  Шоурум мебели "Александр Кожа"
                </p>
                <p className="text-sm text-neutral-500 mt-4">
                  Карта загружается...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onCallbackClick={() => setShowCallbackForm(true)} />

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Callback Form Modal */}
      {showCallbackForm && (
        <CallbackForm onClose={() => setShowCallbackForm(false)} />
      )}
    </>
  )
} 