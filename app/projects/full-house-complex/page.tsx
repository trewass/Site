import Link from 'next/link'

export default function FullHouseComplex() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="container-custom py-6">
        <nav className="flex items-center space-x-2 text-sm text-neutral-500">
          <Link href="/" className="hover:text-neutral-700">Главная</Link>
          <span>→</span>
          <Link href="/raboty" className="hover:text-neutral-700">Наши работы</Link>
          <span>→</span>
          <span className="text-neutral-900">Комплексная меблировка дома</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              Комплексная меблировка дома
            </h1>
            
            {/* Project Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="text-caption text-neutral-500 mb-1">Тип проекта</div>
                <div className="font-semibold">Дом под ключ</div>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="text-caption text-neutral-500 mb-1">Площадь</div>
                <div className="font-semibold">120 м²</div>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="text-caption text-neutral-500 mb-1">Сроки</div>
                <div className="font-semibold">6 месяцев</div>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="text-caption text-neutral-500 mb-1">Материалы</div>
                <div className="font-semibold">МДФ, шпон, пластик</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg mb-8 text-center">Галерея проекта</h2>
            
            {/* Main Image */}
            <div className="mb-8">
              <div className="aspect-[16/10] bg-neutral-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
                  <svg className="w-16 h-16 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Thumbnails Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 25 }, (_, i) => (
                <div key={i} className="aspect-square bg-neutral-200 rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
                    <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Description */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8">Техническое описание</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Особенности конструкции */}
              <div>
                <h3 className="heading-md mb-4">Особенности конструкции</h3>
                <ul className="space-y-3 text-body text-neutral-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Единый стиль во всех помещениях
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Кухня с островом и барной стойкой
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Гардеробы для каждого члена семьи
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ванные с функциональной мебелью
                  </li>
                </ul>
              </div>

              {/* Используемая фурнитура */}
              <div>
                <h3 className="heading-md mb-4">Используемая фурнитура</h3>
                <ul className="space-y-3 text-body text-neutral-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Петли Blum с доводчиками
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Выдвижные системы Hettich
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Раздвижные системы для гардеробов
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Система подсветки LED
                  </li>
                </ul>
              </div>
            </div>

            {/* Помещения */}
            <div className="mt-8">
              <h3 className="heading-md mb-4">Помещения</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="text-caption text-neutral-500 mb-2">Кухня</div>
                  <div className="font-semibold">25 м²</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="text-caption text-neutral-500 mb-2">Гардеробы</div>
                  <div className="font-semibold">4 шт</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="text-caption text-neutral-500 mb-2">Ванные</div>
                  <div className="font-semibold">2 шт</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="text-caption text-neutral-500 mb-2">Гостиная</div>
                  <div className="font-semibold">35 м²</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Заказать похожий проект
            </h2>
            <p className="text-body text-neutral-600 mb-8">
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей проекта
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacts" className="btn-primary">
                Получить консультацию
              </a>
              <a href="/uslugi" className="btn-secondary">
                Рассчитать стоимость
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <Link href="/projects/bathroom-furniture-3" className="btn-secondary mb-4 sm:mb-0">
                ← Предыдущий проект
              </Link>
              <Link href="/raboty" className="btn-secondary">
                Назад к галерее
              </Link>
              <Link href="/projects/kitchen-modern-1" className="btn-secondary">
                Следующий проект →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 