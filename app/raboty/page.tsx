'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function RabotyPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Современная кухня в Ялте",
      type: "kitchen",
      location: "Крым",
      task: "Современная кухня с островом для большой семьи",
      solution: "Кухня в стиле минимализм с островом, встроенной техникой и системой хранения",
      result: "Функциональное пространство для готовки и общения",
      image: "/placeholder-kitchen.jpg",
      projectUrl: "/projects/kitchen-modern-1"
    },
    {
      id: 2,
      title: "Кухня-гостиная в Краснодаре",
      type: "kitchen",
      location: "Краснодар",
      task: "Объединение кухни и гостиной в единое пространство",
      solution: "Кухонный гарнитур с барной стойкой и зоной отдыха",
      result: "Современное пространство для жизни и приема гостей",
      image: "/placeholder-kitchen-2.jpg",
      projectUrl: "/projects/kitchen-living-room"
    },
    {
      id: 3,
      title: "Гардеробная в доме",
      type: "wardrobe",
      location: "Крым",
      task: "Система хранения премиум-класса",
      solution: "Встроенный гардероб с системой выдвижных ящиков и вешалок",
      result: "Организованное пространство для одежды и аксессуаров",
      image: "/placeholder-wardrobe.jpg",
      projectUrl: "/projects/wardrobe-case-2"
    },
    {
      id: 4,
      title: "Шкаф-купе в спальне",
      type: "wardrobe",
      location: "Краснодар",
      task: "Функциональный шкаф для спальни",
      solution: "Шкаф-купе с зеркальными дверями и внутренней подсветкой",
      result: "Стильное и практичное решение для хранения",
      image: "/placeholder-wardrobe-2.jpg",
      projectUrl: "/projects/wardrobe-bedroom"
    },
    {
      id: 5,
      title: "Ванная комната в коттедже",
      type: "bathroom",
      location: "Крым",
      task: "Функциональная ванная комната",
      solution: "Встроенная мебель с зеркалами и подсветкой",
      result: "Комфортное пространство для утренних процедур",
      image: "/placeholder-bathroom.jpg",
      projectUrl: "/projects/bathroom-furniture-3"
    },
    {
      id: 6,
      title: "Комплексная меблировка дома",
      type: "full-house",
      location: "Крым",
      task: "Комплексная меблировка частного дома",
      solution: "Кухня, гардеробы, ванные, гостиная - все помещения",
      result: "Единый стиль и функциональность во всем доме",
      image: "/placeholder-house.jpg",
      projectUrl: "/projects/full-house-complex"
    }
  ]

  const filters = [
    { id: 'all', label: 'Все работы' },
    { id: 'kitchen', label: 'Кухни' },
    { id: 'wardrobe', label: 'Гардеробы' },
    { id: 'bathroom', label: 'Ванные' },
    { id: 'full-house', label: 'Дома под ключ' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="heading-xl mb-6">
                Наши работы
              </h1>
              <p className="text-body text-neutral-600 mb-8">
                Посмотрите, что мы создаем для наших клиентов. 
                Каждый проект - это история успеха.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-white border-b border-neutral-200">
          <div className="container-custom">
            <div className="flex flex-wrap gap-4 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="group">
                    {/* Project Image */}
                    <a href={project.projectUrl} className="block">
                      <div className="aspect-[4/3] bg-neutral-100 rounded-2xl mb-6 overflow-hidden group-hover:shadow-lg transition-shadow">
                        <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                          <svg className="w-16 h-16 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </a>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="heading-md group-hover:text-neutral-700 transition-colors">
                          <a href={project.projectUrl}>{project.title}</a>
                        </h3>
                        <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                          {project.location}
                        </span>
                      </div>

                      {/* Task → Solution → Result */}
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">Задача</h4>
                          <p className="text-sm text-neutral-600">{project.task}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">Решение</h4>
                          <p className="text-sm text-neutral-600">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">Результат</h4>
                          <p className="text-sm text-neutral-600">{project.result}</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <a href={project.projectUrl} className="btn-primary mt-6 inline-block">
                        Смотреть детали
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                  </svg>
                </div>
                <h3 className="heading-md mb-2">Работы не найдены</h3>
                <p className="text-neutral-600">
                  В выбранной категории пока нет работ. Попробуйте другой фильтр.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="heading-lg mb-6">
                Хотите такой же результат?
              </h2>
              <p className="text-body text-neutral-600 mb-8">
                Обсудим ваш проект и создадим мебель, которая будет радовать вас каждый день.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Обсудить проект
                </button>
                <button className="btn-secondary">
                  Позвонить
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 