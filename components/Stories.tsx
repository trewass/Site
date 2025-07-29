'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Story {
  id: number
  title: string
  preview: string
  type: 'story' | 'project_gallery' // обычная story или переход на детальную страницу
  projectUrl?: string // URL детальной страницы для project_gallery
  content: {
    image: string
    description: string
    actionButton?: {
      text: string
      link: string
    }
  }
}

const stories: Story[] = [
  {
    id: 1,
    title: "Кухня в работе",
    preview: "/api/placeholder/90/110",
    type: "story",
    content: {
      image: "/api/placeholder/800/600",
      description: "Современная кухня с островом в процессе монтажа. Внимание к деталям и качеству исполнения.",
      actionButton: {
        text: "Заказать похожую",
        link: "/contacts"
      }
    }
  },
  {
    id: 2,
    title: "Новый заказ",
    preview: "/api/placeholder/90/110",
    type: "story",
    content: {
      image: "/api/placeholder/800/600",
      description: "Приняли новый заказ на гардеробную систему. Начинаем с замеров и планирования.",
      actionButton: {
        text: "Заказать консультацию",
        link: "/contacts"
      }
    }
  },
  {
    id: 3,
    title: "Монтаж шкафа",
    preview: "/api/placeholder/90/110",
    type: "story",
    content: {
      image: "/api/placeholder/800/600",
      description: "Установка шкафа-купе в спальне. Точность и аккуратность на каждом этапе.",
      actionButton: {
        text: "Узнать больше",
        link: "/raboty"
      }
    }
  },
  {
    id: 4,
    title: "Довольный клиент",
    preview: "/api/placeholder/90/110",
    type: "story",
    content: {
      image: "/api/placeholder/800/600",
      description: "Финальная сдача проекта. Клиент доволен результатом и рекомендует нас друзьям.",
      actionButton: {
        text: "Посмотреть отзывы",
        link: "/otzyvy"
      }
    }
  },
  {
    id: 5,
    title: "В цеху",
    preview: "/api/placeholder/90/110",
    type: "story",
    content: {
      image: "/api/placeholder/800/600",
      description: "Производство мебели в нашем цеху. Используем только качественные материалы.",
      actionButton: {
        text: "Узнать о материалах",
        link: "/printsipy"
      }
    }
  },
  {
    id: 6,
    title: "Замеры объекта",
    preview: "/api/placeholder/90/110",
    type: "story",
    content: {
      image: "/api/placeholder/800/600",
      description: "Точные замеры помещения - основа качественного проекта. Никаких приблизительных расчетов.",
      actionButton: {
        text: "Заказать замер",
        link: "/contacts"
      }
    }
  },
  {
    id: 7,
    title: "Готовый проект",
    preview: "/api/placeholder/90/110",
    type: "project_gallery",
    projectUrl: "/projects/kitchen-modern-1",
    content: {
      image: "/api/placeholder/800/600",
      description: "Завершенный проект кухни-гостиной. Функциональность и эстетика в гармонии.",
      actionButton: {
        text: "Смотреть все фото",
        link: "/projects/kitchen-modern-1"
      }
    }
  }
]

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

  const openStory = (story: Story, index: number) => {
    if (story.type === 'project_gallery' && story.projectUrl) {
      // Переход на детальную страницу проекта
      window.location.href = story.projectUrl
    } else {
      // Открытие полноэкранного просмотра обычной story
      setSelectedStory(story)
      setCurrentStoryIndex(index)
    }
  }

  const closeStory = () => {
    setSelectedStory(null)
  }

  const nextStory = () => {
    const nextIndex = (currentStoryIndex + 1) % stories.length
    setCurrentStoryIndex(nextIndex)
    setSelectedStory(stories[nextIndex])
  }

  const prevStory = () => {
    const prevIndex = currentStoryIndex === 0 ? stories.length - 1 : currentStoryIndex - 1
    setCurrentStoryIndex(prevIndex)
    setSelectedStory(stories[prevIndex])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeStory()
    } else if (e.key === 'ArrowRight') {
      nextStory()
    } else if (e.key === 'ArrowLeft') {
      prevStory()
    }
  }

  return (
    <>
      {/* Stories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="heading-lg mb-4">
              Сейчас у нас
            </h2>
            <p className="text-body text-neutral-600">
              Загляните за кулисы нашей работы
            </p>
          </div>

          {/* Stories Swiper */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
              }}
                             breakpoints={{
                 640: {
                   slidesPerView: 4,
                   spaceBetween: 20,
                 },
                 768: {
                   slidesPerView: 6,
                   spaceBetween: 20,
                 },
                 1024: {
                   slidesPerView: 7,
                   spaceBetween: 20,
                 },
               }}
              className="stories-swiper"
            >
              {stories.map((story, index) => (
                <SwiperSlide key={story.id}>
                  <div 
                    className="flex flex-col items-center cursor-pointer group"
                    onClick={() => openStory(story, index)}
                  >
                                         {/* Story Card */}
                     <div className="relative mb-3">
                       <div className="w-[70px] h-[85px] md:w-[90px] md:h-[110px] rounded-2xl overflow-hidden border-2 border-neutral-300 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
                         <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                           <svg className="w-6 h-6 md:w-8 md:h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                           </svg>
                         </div>
                       </div>
                     </div>
                    
                    {/* Story Title */}
                    <p className="text-xs text-neutral-600 text-center max-w-20 leading-tight">
                      {story.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="swiper-button-prev !text-neutral-400 !w-8 !h-8 !bg-white !rounded-full !shadow-md hover:!text-neutral-600 transition-colors"></div>
            <div className="swiper-button-next !text-neutral-400 !w-8 !h-8 !bg-white !rounded-full !shadow-md hover:!text-neutral-600 transition-colors"></div>
            
            {/* Pagination */}
            <div className="swiper-pagination !bottom-0 !relative mt-6"></div>
          </div>
        </div>
      </section>

      {/* Fullscreen Story Modal */}
      {selectedStory && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeStory}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress Bar */}
            <div className="w-full h-1 bg-neutral-200">
              <div 
                className="h-full bg-neutral-900 transition-all duration-300"
                style={{ width: `${((currentStoryIndex + 1) / stories.length) * 100}%` }}
              ></div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeStory}
              className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10"
            >
              <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Story Content */}
            <div className="relative">
              {/* Story Image */}
              <div className="aspect-[4/3] bg-neutral-100 relative">
                <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                  <svg className="w-16 h-16 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Story Info */}
              <div className="p-6">
                <h3 className="heading-md mb-3">{selectedStory.title}</h3>
                <p className="text-body text-neutral-600 mb-6">
                  {selectedStory.content.description}
                </p>

                {/* Action Button */}
                {selectedStory.content.actionButton && (
                  <a 
                    href={selectedStory.content.actionButton.link}
                    className="btn-primary inline-block"
                  >
                    {selectedStory.content.actionButton.text}
                  </a>
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevStory}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
              >
                <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextStory}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
              >
                <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 