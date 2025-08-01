'use client'
import { useState } from 'react'

interface Review {
  id: string
  name: string
  city: string
  project: string
  text: string
  rating: number
  date: string
  photo?: string
}

const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Анна Петрова',
    city: 'Ялта',
    project: 'Кухня с островом',
    text: 'Очень довольна результатом! Кухня получилась именно такой, как я хотела. Качество материалов на высоте, монтаж выполнен профессионально. Рекомендую всем!',
    rating: 5,
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Михаил Соколов',
    city: 'Севастополь',
    project: 'Гардеробная система',
    text: 'Заказал гардеробную для спальни. Сроки соблюдены, качество отличное. Особенно порадовала продуманная система хранения - теперь все вещи на своих местах.',
    rating: 5,
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Елена Козлова',
    city: 'Феодосия',
    project: 'Ванная комната',
    text: 'Прекрасная работа! Ванная комната преобразилась до неузнаваемости. Функционально, красиво, качественно. Спасибо команде за профессионализм.',
    rating: 5,
    date: '2024-01-05'
  },
  {
    id: '4',
    name: 'Дмитрий Волков',
    city: 'Краснодар',
    project: 'Дом под ключ',
    text: 'Сделали весь дом - от кухни до гардеробных. Работа масштабная, но справились на отлично. Сроки соблюли, качество не подвело. Рекомендую!',
    rating: 5,
    date: '2023-12-20'
  },
  {
    id: '5',
    name: 'Ольга Морозова',
    city: 'Ялта',
    project: 'Кухня в классическом стиле',
    text: 'Классическая кухня получилась изумительной! Внимание к деталям, качественные материалы, профессиональный монтаж. Очень довольна результатом.',
    rating: 5,
    date: '2023-12-15'
  },
  {
    id: '6',
    name: 'Сергей Иванов',
    city: 'Симферополь',
    project: 'Гардероб в прихожей',
    text: 'Отличная работа! Гардероб в прихожей решил проблему хранения верхней одежды. Качество на высоте, дизайн современный и функциональный.',
    rating: 5,
    date: '2023-12-10'
  }
]

export default function Reviews() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400' : 'text-neutral-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="heading-lg mb-4">Отзывы клиентов</h2>
          <p className="text-body text-neutral-600">
            Что говорят о нас наши довольные клиенты
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <div 
              key={review.id}
              className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedReview(review)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                    <span className="text-neutral-600 font-semibold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{review.name}</h3>
                    <p className="text-sm text-neutral-600">{review.city}</p>
                  </div>
                </div>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-neutral-900 mb-2">{review.project}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed line-clamp-4">
                  {review.text}
                </p>
              </div>
              
              <div className="text-xs text-neutral-500">
                {formatDate(review.date)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/otzyvy" className="btn-secondary">
            Все отзывы
          </a>
        </div>
      </div>

      {/* Modal для полного отзыва */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center">
                  <span className="text-neutral-600 font-semibold text-lg">
                    {selectedReview.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900">{selectedReview.name}</h3>
                  <p className="text-neutral-600">{selectedReview.city}</p>
                  <div className="flex mt-2">{renderStars(selectedReview.rating)}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedReview(null)}
                className="text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-neutral-900 mb-4">{selectedReview.project}</h4>
              <p className="text-neutral-600 leading-relaxed">{selectedReview.text}</p>
            </div>
            
            <div className="text-sm text-neutral-500">
              {formatDate(selectedReview.date)}
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 