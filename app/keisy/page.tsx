'use client'
import Header from '@/components/Header'
import { useState, useEffect } from 'react'

// Airtable конфигурация
const AIRTABLE_CONFIG = {
  API_KEY: 'patQfujQaKiRKW0ix.9968ac4d5d84d30dc7f7ac663c993282324a6cfb07125313b2c58268f943b4ee',
  BASE_ID: 'appQfujQaKiRKW0ix',
  TABLE_ID: 'tblQfujQaKiRKW0ix'
}

interface CasePhoto {
  id: string
  mediaUrl: string
  mediaType: 'image' | 'video'
  description?: string
  projectName: string
  city: string
}

interface Case {
  id: string
  projectName: string
  city: string
  previewImage: string
  photos: CasePhoto[]
}

// Fallback данные на случай, если Airtable не работает
const FALLBACK_CASES: Case[] = [
  {
    id: 'case-1',
    projectName: 'Ирина',
    city: 'Ялта',
    previewImage: 'https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=Кухня+Ирины',
    photos: [
      {
        id: 'photo-1',
        mediaUrl: 'https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=Кухня+Ирины+1',
        mediaType: 'image',
        description: 'Современная кухня с островом',
        projectName: 'Ирина',
        city: 'Ялта'
      },
      {
        id: 'photo-2',
        mediaUrl: 'https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=Кухня+Ирины+2',
        mediaType: 'image',
        description: 'Функциональная зона готовки',
        projectName: 'Ирина',
        city: 'Ялта'
      }
    ]
  },
  {
    id: 'case-2',
    projectName: 'Марина',
    city: 'Феодосия',
    previewImage: 'https://via.placeholder.com/800x600/059669/FFFFFF?text=Кухня+Марины',
    photos: [
      {
        id: 'photo-3',
        mediaUrl: 'https://via.placeholder.com/800x600/059669/FFFFFF?text=Кухня+Марины+1',
        mediaType: 'image',
        description: 'Элегантная кухня в классическом стиле',
        projectName: 'Марина',
        city: 'Феодосия'
      },
      {
        id: 'photo-4',
        mediaUrl: 'https://via.placeholder.com/800x600/DC2626/FFFFFF?text=Кухня+Марины+2',
        mediaType: 'image',
        description: 'Детали и фурнитура',
        projectName: 'Марина',
        city: 'Феодосия'
      }
    ]
  },
  {
    id: 'case-3',
    projectName: 'Тимур',
    city: 'Бахчисарай',
    previewImage: 'https://via.placeholder.com/800x600/EA580C/FFFFFF?text=Кухня+Тимура',
    photos: [
      {
        id: 'photo-5',
        mediaUrl: 'https://via.placeholder.com/800x600/EA580C/FFFFFF?text=Кухня+Тимура+1',
        mediaType: 'image',
        description: 'Минималистичная кухня',
        projectName: 'Тимур',
        city: 'Бахчисарай'
      },
      {
        id: 'photo-6',
        mediaUrl: 'https://via.placeholder.com/800x600/9333EA/FFFFFF?text=Кухня+Тимура+2',
        mediaType: 'image',
        description: 'Современные решения',
        projectName: 'Тимур',
        city: 'Бахчисарай'
      }
    ]
  }
]

export default function KeisyPage() {
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCase, setSelectedCase] = useState<Case | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  // Загрузка кейсов из Airtable
  useEffect(() => {
    loadCasesFromAirtable()
  }, [])

  async function loadCasesFromAirtable() {
    try {
      console.log('🔄 Загружаем кейсы из Airtable...')
      console.log('📋 Конфигурация:', AIRTABLE_CONFIG)
      
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_CONFIG.BASE_ID}/${AIRTABLE_CONFIG.TABLE_ID}?filterByFormula={Кейс}=1`,
        {
          headers: { 
            'Authorization': `Bearer ${AIRTABLE_CONFIG.API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      )
      
      console.log('📡 Ответ от сервера:', response.status, response.statusText)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('📊 Данные от Airtable:', data)
      
      if (!data.records || data.records.length === 0) {
        console.log('⚠️ Нет записей с Кейс=1, используем fallback данные')
        setCases(FALLBACK_CASES)
        setLoading(false)
        return
      }
      
      // Группируем по проекту
      const groupedCases: { [key: string]: CasePhoto[] } = {}
      
      data.records.forEach((record: any) => {
        const projectName = record.fields['Объект'] || 'Проект'
        const city = record.fields['Город'] || 'Крым'
        
        console.log('📝 Обрабатываем запись:', { projectName, city, fields: record.fields })
        
        if (!groupedCases[projectName]) {
          groupedCases[projectName] = []
        }
        
        groupedCases[projectName].push({
          id: record.id,
          mediaUrl: record.fields['Ссылка'],
          mediaType: record.fields['Тип файла'] === 'video/mp4' ? 'video' : 'image',
          description: record.fields['Описание'],
          projectName,
          city
        })
      })
      
      console.log('📦 Сгруппированные кейсы:', groupedCases)
      
      // Преобразуем в массив Case
      const result = Object.values(groupedCases)
        .slice(0, 3) // Ограничиваем до 3 кейсов
        .map((photos, index) => ({
          id: `case-${index + 1}`,
          projectName: photos[0].projectName,
          city: photos[0].city,
          previewImage: photos[0].mediaUrl,
          photos
        }))
      
      console.log('✅ Финальный результат:', result)
      setCases(result)
      setLoading(false)
    } catch (error) {
      console.error('❌ Ошибка загрузки кейсов:', error)
      setError(error instanceof Error ? error.message : 'Неизвестная ошибка')
      console.log('🔄 Используем fallback данные из-за ошибки')
      setCases(FALLBACK_CASES)
      setLoading(false)
    }
  }

  const openCaseModal = (caseItem: Case) => {
    setSelectedCase(caseItem)
    setCurrentPhotoIndex(0)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCase(null)
    setCurrentPhotoIndex(0)
  }

  const nextPhoto = () => {
    if (selectedCase && currentPhotoIndex < selectedCase.photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1)
    }
  }

  const prevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1)
    }
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white">
          <section className="py-24 bg-neutral-50">
            <div className="container-custom">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="heading-xl mb-6">Наши кейсы</h1>
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-600"></div>
                  <p className="text-body text-neutral-600">Загружаем проекты...</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    )
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
                Наши кейсы
              </h1>
              <p className="text-body text-neutral-600 mb-8">
                Развернутые истории наших проектов. 
                От задачи до результата - как мы решаем сложные вопросы.
              </p>
              {error && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-yellow-800 text-sm">
                    ⚠️ Используем демо-данные. Ошибка загрузки: {error}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="space-y-24">
              {cases.map((caseItem) => (
                <div key={caseItem.id} className="bg-neutral-50 rounded-2xl p-8 group cursor-pointer hover:shadow-lg transition-all duration-200">
                  {/* Case Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="heading-lg group-hover:text-neutral-700 transition-colors">
                        {caseItem.projectName} - история успеха
                      </h2>
                      <span className="inline-flex items-center rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        {caseItem.city}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-neutral-900">Проект:</span>
                        <span className="text-neutral-600 ml-2">{caseItem.projectName}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900">Город:</span>
                        <span className="text-neutral-600 ml-2">{caseItem.city}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900">Фото:</span>
                        <span className="text-neutral-600 ml-2">{caseItem.photos.length} шт.</span>
                      </div>
                    </div>
                  </div>

                  {/* Case Image */}
                  <div 
                    className="aspect-[16/9] bg-neutral-100 rounded-xl mb-8 overflow-hidden group-hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
                    onClick={() => openCaseModal(caseItem)}
                  >
                    <img 
                      src={caseItem.previewImage} 
                      alt={`${caseItem.projectName} - ${caseItem.city}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center hidden">
                      <svg className="w-16 h-16 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Case Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Проект</h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {caseItem.projectName} в городе {caseItem.city}. 
                        Проект включает в себя качественную мебель с продуманным дизайном.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Решение</h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Создали функциональное пространство с учетом всех пожеланий клиента. 
                        Использовали качественные материалы и современные технологии.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Результат</h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Клиент доволен результатом. Пространство получилось уютным, 
                        функциональным и стильным. Все детали продуманы до мелочей.
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 text-center">
                    <button 
                      className="btn-primary inline-block"
                      onClick={() => openCaseModal(caseItem)}
                    >
                      Смотреть все фото ({caseItem.photos.length})
                    </button>
                  </div>
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
                Хотите такую же историю успеха?
              </h2>
              <p className="text-body text-neutral-600 mb-8">
                Расскажите о своем проекте, и мы создадим для вас 
                качественную мебель с продуманным дизайном.
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

      {/* Modal для просмотра фотографий */}
      {isModalOpen && selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl max-h-full">
            {/* Кнопка закрытия */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Навигация */}
            {currentPhotoIndex > 0 && (
              <button 
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {currentPhotoIndex < selectedCase.photos.length - 1 && (
              <button 
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Фотография */}
            <div className="w-full h-full flex items-center justify-center">
              {selectedCase.photos[currentPhotoIndex].mediaType === 'video' ? (
                <video 
                  src={selectedCase.photos[currentPhotoIndex].mediaUrl}
                  controls
                  className="max-w-full max-h-full object-contain"
                  autoPlay
                  muted={false}
                />
              ) : (
                <img 
                  src={selectedCase.photos[currentPhotoIndex].mediaUrl}
                  alt={`${selectedCase.projectName} - фото ${currentPhotoIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>

            {/* Информация */}
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-lg font-semibold mb-2">
                {selectedCase.projectName} - {selectedCase.city}
              </h3>
              <p className="text-sm opacity-80">
                Фото {currentPhotoIndex + 1} из {selectedCase.photos.length}
              </p>
              {selectedCase.photos[currentPhotoIndex].description && (
                <p className="text-sm opacity-70 mt-2">
                  {selectedCase.photos[currentPhotoIndex].description}
                </p>
              )}
            </div>

            {/* Индикаторы */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
              {selectedCase.photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPhotoIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
} 