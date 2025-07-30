// ПЛАН ИНТЕГРАЦИИ СТРАНИЦЫ РАБОТ

// 1. СОЗДАТЬ ПОЛЯ В AIRTABLE ВРУЧНУЮ:
// Зайди в свою базу 2024-2025 и добавь эти поля:

// ✅ "Описание проекта" - Long text (многострочный текст)
// ✅ "Материалы" - Single line text
// ✅ "Особенности" - Long text  
// ✅ "Срок выполнения" - Single line text
// ✅ "Стоимость" - Single line text (например: "от 700 тыс")

// 2. ПОЛНЫЙ КОД ДЛЯ @app/raboty/page.tsx:

'use client'
import Header from '@/components/Header'
import { useState, useEffect } from 'react'

// Конфигурация Airtable
const AIRTABLE_CONFIG = {
  API_KEY: 'patQfujQaKiRKW0ix.9968ac4d5d84d30dc7f7ac663c993282324a6cfb07125313b2c58268f943b4ee',
  BASE_ID: 'appayVD9m1J1bR13Z',
  TABLE_ID: 'tblg1UR9TmB4gLS7i'
}

interface WorkPhoto {
  id: string
  mediaUrl: string
  mediaType: 'image' | 'video'
  description?: string
  projectName: string
  city: string
  materials?: string
  features?: string
  duration?: string
  cost?: string
  projectDescription?: string
}

interface Work {
  id: string
  projectName: string
  city: string
  category: string
  previewImage: string
  photos: WorkPhoto[]
  description: string
  materials: string
  features: string
  duration: string
  cost: string
}

// Fallback данные
const FALLBACK_WORKS: Work[] = [
  {
    id: 'work-1',
    projectName: 'Кухня в Ялте',
    city: 'Ялта',
    category: 'Кухни',
    previewImage: 'https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Кухня+Ялта',
    photos: [],
    description: 'Современная кухня с островом, выполненная в минималистичном стиле',
    materials: 'МДФ в эмали, столешница из кварца',
    features: 'Встроенная техника, система soft-close',
    duration: '45 дней',
    cost: 'от 850 тыс'
  }
]

export default function RabotyPage() {
  const [works, setWorks] = useState<Work[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('Все работы')
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const categories = ['Все работы', 'Кухни', 'Гардеробы', 'Ванные', 'Дома под ключ']

  useEffect(() => {
    loadWorksFromAirtable()
  }, [])

  function extractCityFromProjectName(projectName: string): string {
    if (projectName.toLowerCase().includes('ялта')) return 'Ялта'
    if (projectName.toLowerCase().includes('феодосия')) return 'Феодосия'  
    if (projectName.toLowerCase().includes('бахчисарай')) return 'Бахчисарай'
    if (projectName.toLowerCase().includes('краснодар')) return 'Краснодар'
    if (projectName.toLowerCase().includes('севастополь')) return 'Севастополь'
    return 'Крым'
  }

  function extractCategoryFromProjectName(projectName: string): string {
    const name = projectName.toLowerCase()
    if (name.includes('кухня') || name.includes('марина') || name.includes('ирина')) return 'Кухни'
    if (name.includes('гардероб') || name.includes('шкаф')) return 'Гардеробы'
    if (name.includes('ванная') || name.includes('ванна')) return 'Ванные'
    if (name.includes('дом') || name.includes('коттедж')) return 'Дома под ключ'
    return 'Кухни' // по умолчанию
  }

  async function loadWorksFromAirtable() {
    try {
      console.log('🔄 Загружаем работы из Airtable...')
      
      // 1. ДОБАВЛЯЮ ОТЛАДКУ
      const requestUrl = `https://api.airtable.com/v0/${AIRTABLE_CONFIG.BASE_ID}/${AIRTABLE_CONFIG.TABLE_ID}?filterByFormula=IF({Страница работы}, TRUE(), FALSE())`
      console.log('🔍 URL запроса:', requestUrl)
      console.log('🔑 API Key:', AIRTABLE_CONFIG.API_KEY)
      
      const response = await fetch(requestUrl, {
        headers: { 
          'Authorization': `Bearer ${AIRTABLE_CONFIG.API_KEY}`,
          'Content-Type': 'application/json'
        }
      })
      
      // 2. ДОБАВЛЯЮ ЛОГИРОВАНИЕ КАЖДОГО ШАГА
      console.log('📊 Response status:', response.status)
      console.log('📊 Response statusText:', response.statusText)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('📦 Raw data:', data)
      console.log('📝 Records found:', data.records?.length)
      
      if (!data.records || data.records.length === 0) {
        console.log('⚠️ Нет записей с Страница работы=1')
        setWorks(FALLBACK_WORKS)
        setLoading(false)
        return
      }
      
      // 3. УБИРАЮ ГРУППИРОВКУ - ПРОСТОЙ ПОДХОД
      console.log('🔄 Обрабатываем записи без группировки...')
      
      const result: Work[] = []
      
      data.records.forEach((record: any, index: number) => {
        console.log(`📋 Обрабатываем запись ${index + 1}:`, record.fields)
        
        const projectName = record.fields['Объект'] || 'Проект'
        const city = extractCityFromProjectName(projectName)
        const category = extractCategoryFromProjectName(projectName)
        
        const mediaUrl = record.fields['Превью'] && record.fields['Тип файла'] !== 'video/mp4' 
          ? record.fields['Превью'][0]?.url 
          : record.fields['Ссылка']
        
        // Создаем одну работу для каждой записи
        const work: Work = {
          id: `work-${index + 1}`,
          projectName,
          city,
          category,
          previewImage: mediaUrl,
          photos: [{
            id: record.id,
            mediaUrl: mediaUrl,
            mediaType: record.fields['Тип файла'] === 'video/mp4' ? 'video' : 'image',
            description: record.fields['Описание фото'] || '',
            projectName,
            city,
            materials: record.fields['Материалы'] || '',
            features: record.fields['Особенности'] || '',
            duration: record.fields['Срок выполнения'] || '45 дней',
            cost: record.fields['Стоимость'] || '',
            projectDescription: record.fields['Описание проекта'] || ''
          }],
          description: record.fields['Описание проекта'] || `Качественный проект ${projectName} в городе ${city}`,
          materials: record.fields['Материалы'] || 'МДФ в эмали, качественная фурнитура',
          features: record.fields['Особенности'] || 'Индивидуальный дизайн, функциональность',
          duration: record.fields['Срок выполнения'] || '45 дней',
          cost: record.fields['Стоимость'] || 'от 700 тыс'
        }
        
        result.push(work)
        console.log(`✅ Добавлена работа: ${work.projectName} (${work.city})`)
      })
      
      console.log('✅ Финальный результат работ:', result)
      console.log('📊 Всего работ загружено:', result.length)
      setWorks(result)
      setLoading(false)
    } catch (error) {
      console.error('❌ Ошибка загрузки работ:', error)
      setWorks(FALLBACK_WORKS)
      setLoading(false)
    }
  }

  const filteredWorks = selectedCategory === 'Все работы' 
    ? works 
    : works.filter(work => work.category === selectedCategory)

  const openWorkModal = (work: Work) => {
    setSelectedWork(work)
    setCurrentPhotoIndex(0)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedWork(null)
    setCurrentPhotoIndex(0)
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white">
          <section className="py-24 bg-neutral-50">
            <div className="container-custom">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="heading-xl mb-6">Наши работы</h1>
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-600"></div>
                  <p className="text-body text-neutral-600">Загружаем работы...</p>
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
              <h1 className="heading-xl mb-6">Наши работы</h1>
              <p className="text-body text-neutral-600 mb-8">
                Посмотрите, что мы создаем для наших клиентов. 
                Каждый проект — это история успеха.
              </p>
              
              {/* Фильтры */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-neutral-900 text-white'
                        : 'bg-white text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Works Grid */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorks.map((work) => (
                <div 
                  key={work.id} 
                  className="group cursor-pointer"
                  onClick={() => openWorkModal(work)}
                >
                  <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform duration-200">
                    <img 
                      src={work.previewImage} 
                      alt={`${work.projectName} - ${work.city}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                        {work.projectName}
                      </h3>
                      <span className="text-xs bg-neutral-100 px-2 py-1 rounded-full text-neutral-600">
                        {work.city}
                      </span>
                    </div>
                    
                    <p className="text-sm text-neutral-600 line-clamp-2">
                      {work.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span>{work.duration}</span>
                      <span>{work.cost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal для просмотра работы */}
      {isModalOpen && selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-y-auto">
          <div className="min-h-screen flex items-start justify-center p-4">
            <div className="relative w-full max-w-6xl bg-white rounded-lg overflow-hidden">
              
              {/* Header */}
              <div className="bg-neutral-50 px-6 py-4 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900">
                      {selectedWork.projectName}
                    </h2>
                    <p className="text-neutral-600">{selectedWork.city} • {selectedWork.category}</p>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col lg:flex-row">
                
                {/* Left Panel */}
                <div className="lg:w-1/3 p-6 border-r border-neutral-200">
                  <h3 className="text-lg font-semibold mb-4">О проекте</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-2">Описание</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {selectedWork.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-2">Материалы</h4>
                      <p className="text-sm text-neutral-600">
                        {selectedWork.materials}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-2">Особенности</h4>
                      <p className="text-sm text-neutral-600">
                        {selectedWork.features}
                      </p>
                    </div>
                    
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

                  {/* Gallery Preview */}
                  <h4 className="font-medium text-neutral-900 mb-3">Фотографии ({selectedWork.photos.length})</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedWork.photos.slice(0, 9).map((photo, index) => (
                      <div 
                        key={photo.id}
                        className={`aspect-square bg-neutral-100 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                          index === currentPhotoIndex ? 'border-neutral-800' : 'border-transparent hover:border-neutral-300'
                        }`}
                        onClick={() => setCurrentPhotoIndex(index)}
                      >
                        <img 
                          src={photo.mediaUrl} 
                          alt={`${selectedWork.projectName} - ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Panel - Main Image */}
                <div className="lg:w-2/3 p-6">
                  <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={selectedWork.photos[currentPhotoIndex]?.mediaUrl}
                      alt={`${selectedWork.projectName} - фото ${currentPhotoIndex + 1}`}
                      className="w-full h-full object-contain cursor-pointer"
                      onClick={() => {
                        const img = selectedWork.photos[currentPhotoIndex]?.mediaUrl;
                        if (img) {
                          const newWindow = window.open('', '_blank');
                          if (newWindow) {
                            newWindow.document.write(`
                              <html>
                                <head><title>${selectedWork.projectName} - Фото ${currentPhotoIndex + 1}</title></head>
                                <body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;min-height:100vh;">
                                  <img src="${img}" style="max-width:100%;max-height:100vh;object-fit:contain;" />
                                </body>
                              </html>
                            `);
                          }
                        }
                      }}
                    />
                  </div>

                  {/* Image Description */}
                  <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-neutral-900 mb-2">
                      Фото {currentPhotoIndex + 1} из {selectedWork.photos.length}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {selectedWork.photos[currentPhotoIndex]?.description || 
                      `Фотография проекта ${selectedWork.projectName} в городе ${selectedWork.city}`}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button 
                      className="btn-primary"
                      onClick={() => {
                        const message = `Здравствуйте! Хочу заказать проект похожий на "${selectedWork.projectName}" из города ${selectedWork.city}. Обсудим детали?`;
                        const whatsappUrl = `https://wa.me/79780000000?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      Заказать похожий проект
                    </button>
                    <button 
                      className="btn-secondary"
                      onClick={() => window.location.href = '/contacts'}
                    >
                      Связаться с нами
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// 3. ПОЛЯ ДЛЯ СОЗДАНИЯ В AIRTABLE:
/*
Зайди в базу 2024-2025 и добавь эти поля:

1. "Описание проекта" - Long text
   Пример: "Современная кухня для семьи из 4 человек. Особое внимание уделили эргономике и функциональности."

2. "Материалы" - Single line text  
   Пример: "МДФ в эмали, столешница из кварца, фурнитура Blum"

3. "Особенности" - Long text
   Пример: "Встроенная техника, система push-to-open, LED подсветка, остров с барной стойкой"

4. "Срок выполнения" - Single line text
   Пример: "45 дней"

5. "Стоимость" - Single line text  
   Пример: "от 850 тыс"
*/

// 4. КАК ИСПОЛЬЗОВАТЬ:
// - Отметь галочкой "Страница работы" у проектов для /raboty
// - Заполни новые поля описаниями
// - Сайт автоматически подтянет данные и покажет в красивом виде