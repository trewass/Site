'use client'
import { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Сколько времени занимает изготовление кухни?',
    answer: 'Стандартное время изготовления кухни составляет 30-45 рабочих дней. Это включает проектирование, производство и монтаж. Сроки могут варьироваться в зависимости от сложности проекта и загруженности производства.'
  },
  {
    id: '2',
    question: 'Какие материалы вы используете?',
    answer: 'Мы работаем с проверенными поставщиками и используем только качественные материалы: МДФ в эмали, массив дерева, пластик, шпон. Для столешниц применяем кварц, искусственный камень, натуральный камень. Фурнитура от ведущих производителей: Blum, Hettich, Grass.'
  },
  {
    id: '3',
    question: 'Делаете ли вы замеры?',
    answer: 'Да, мы проводим бесплатные замеры помещений. Наш специалист приедет к вам в удобное время, проведет точные замеры, обсудит ваши пожелания и составит техническое задание. Замер занимает 1-2 часа.'
  },
  {
    id: '4',
    question: 'Какая гарантия на мебель?',
    answer: 'Мы предоставляем гарантию 2 года на все изделия и 5 лет на фурнитуру. Гарантия распространяется на производственные дефекты. В случае проблем мы оперативно их решаем.'
  },
  {
    id: '5',
    question: 'Работаете ли вы с бюджетными проектами?',
    answer: 'Мы работаем с разными бюджетами, но наша специализация - качественная мебель среднего и премиум сегмента. Минимальный бюджет на кухню - от 300 тыс рублей. Мы не экономим на качестве, но можем предложить оптимальные решения под ваш бюджет.'
  },
  {
    id: '6',
    question: 'В каких городах вы работаете?',
    answer: 'Основной регион работы - Крым (Ялта, Симферополь, Севастополь, Феодосия и другие города). Также работаем в Краснодарском крае. При необходимости можем рассмотреть другие регионы.'
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="heading-lg mb-4">Частые вопросы</h2>
          <p className="text-body text-neutral-600">
            Ответы на самые популярные вопросы наших клиентов
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <h3 className="font-semibold text-neutral-900 pr-4">
                    {item.question}
                  </h3>
                  <svg 
                    className={`w-5 h-5 text-neutral-500 transition-transform duration-200 ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <p className="text-neutral-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <a href="/contacts" className="btn-primary">
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  )
} 