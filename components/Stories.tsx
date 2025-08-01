'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Story {
  id: number
  title: string
  preview: string
  type: 'story' | 'project_gallery'
  projectUrl?: string
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
      description: "Профессиональные замеры помещения для точного расчета проекта.",
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
    type: "story",
    content: {
      image: "/api/placeholder/800/600",
      description: "Финальный результат - красивая и функциональная мебель для вашего дома.",
      actionButton: {
        text: "Посмотреть работы",
        link: "/raboty"
      }
    }
  }
]

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const openStory = (story: Story, index: number) => {
    if (story.type === 'project_gallery' && story.projectUrl) {
      // Переход на детальную страницу проекта
      window.location.href = story.projectUrl
    } else {
      // Открытие полноэкранного просмотра обычной story
      setSelectedStory(story)
      setCurrentStoryIndex(index)
      setIsVideoPlaying(false)
    }
  }

  const closeStory = () => {
    setSelectedStory(null)
    setIsVideoPlaying(false)
  }

  const nextStory = () => {
    const nextIndex = (currentStoryIndex + 1) % stories.length
    setCurrentStoryIndex(nextIndex)
    setSelectedStory(stories[nextIndex])
    setIsVideoPlaying(false)
  }

  const prevStory = () => {
    const prevIndex = currentStoryIndex === 0 ? stories.length - 1 : currentStoryIndex - 1
    setCurrentStoryIndex(prevIndex)
    setSelectedStory(stories[prevIndex])
    setIsVideoPlaying(false)
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

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const handleVideoPause = () => {
    setIsVideoPlaying(false)
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

          {/* Stories Container */}
          <div className="stories-container">
            <div className="flex gap-4 overflow-x-auto justify-center">
              {stories.map((story, index) => (
                <div 
                  key={story.id}
                  className="story-item flex-shrink-0"
                  data-story-id={story.id}
                  onClick={() => openStory(story, index)}
                >
                  <div className="story-preview">
                    {/* Пока используем плейсхолдеры, позже заменим на реальные данные из Airtable */}
                    <img 
                      src={story.preview} 
                      alt={story.title}
                      className="w-full h-full object-cover object-position-center"
                    />
                  </div>
                  <p className="text-xs text-neutral-600 text-center mt-2 max-w-20 leading-tight">
                    {story.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Story Modal */}
      {selectedStory && (
        <div 
          id="storyModal"
          className="story-modal"
          onClick={closeStory}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div 
            className="story-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="story-close"
              onClick={closeStory}
            >
              &times;
            </button>

            {/* Story Content */}
            <div className="relative">
              {/* Story Image/Video */}
              <div className="story-media">
                <img 
                  id="storyImage"
                  src={selectedStory.content.image} 
                  alt={selectedStory.title}
                  className="w-full h-auto max-h-90vh object-contain"
                />
                {/* Для видео добавим позже */}
                <video 
                  id="storyVideo"
                  controls 
                  playsInline
                  className="w-full h-auto max-h-90vh object-contain hidden"
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                >
                  <source src="" type="video/mp4" />
                </video>
              </div>

              {/* Story Info */}
              <div className="story-info">
                <h3 className="text-xl font-semibold mb-3">{selectedStory.title}</h3>
                <p className="text-neutral-600 mb-6">
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
                className="story-nav story-nav-prev"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextStory}
                className="story-nav story-nav-next"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .stories-container {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 20px 0;
          justify-content: center;
        }

        .story-item {
          min-width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid #ff6b6b;
          transition: transform 0.3s ease;
        }

        .story-item:hover {
          transform: scale(1.05);
        }

        .story-preview {
          width: 100%;
          height: 100%;
        }

        .story-preview video,
        .story-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .story-modal {
          display: block;
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.9);
        }

        .story-modal-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 90vw;
          max-height: 90vh;
          background: white;
          border-radius: 12px;
          overflow: hidden;
        }

        .story-modal video,
        .story-modal img {
          width: 100%;
          height: auto;
          max-height: 90vh;
          object-fit: contain;
        }

        .story-close {
          position: absolute;
          top: 10px;
          right: 15px;
          background: rgba(255,255,255,0.9);
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          font-size: 20px;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-info {
          padding: 20px;
        }

        .story-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.9);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }

        .story-nav:hover {
          background: rgba(255,255,255,1);
        }

        .story-nav-prev {
          left: 10px;
        }

        .story-nav-next {
          right: 10px;
        }

        @media (max-width: 768px) {
          .stories-container {
            justify-content: flex-start;
            padding-left: 20px;
          }
          
          .story-item {
            min-width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </>
  )
} 