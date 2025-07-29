'use client'
import { useState, useEffect } from 'react'

const AIRTABLE_CONFIG = {
  API_KEY: 'patQfujQaKiRKW0ix.9968ac4d5d84d30dc7f7ac663c993282324a6cfb07125313b2c58268f943b4ee',
  BASE_ID: 'appayVD9m1J1bR13Z',
  TABLE_ID: 'tblg1UR9TmB4gLS7i'
}

interface Story {
  id: string
  title: string
  description: string
  mediaUrl: string
  mediaType: 'video' | 'image'
  order: number
}

export default function StoriesAirtable() {
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

  async function loadStoriesFromAirtable() {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_CONFIG.BASE_ID}/${AIRTABLE_CONFIG.TABLE_ID}?filterByFormula=AND({Порядок Stories}>0)&sort[0][field]=Порядок Stories`,
        {
          headers: { 
            'Authorization': `Bearer ${AIRTABLE_CONFIG.API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      )
      
      const data = await response.json()
      return data.records.map((record: any) => ({
        id: record.id,
        title: record.fields['Объект'] || 'Наша работа',
        description: record.fields['Описание'] || '',
        mediaUrl: record.fields['Ссылка'],
        mediaType: record.fields['Тип файла'] === 'video/mp4' ? 'video' : 'image',
        order: record.fields['Порядок Stories']
      }))
    } catch (error) {
      console.error('Ошибка загрузки Stories:', error)
      return []
    }
  }

  useEffect(() => {
    async function loadStories() {
      setLoading(true)
      const storiesData = await loadStoriesFromAirtable()
      setStories(storiesData)
      setLoading(false)
    }
    loadStories()
  }, [])

  const openStory = (index: number) => {
    setSelectedStory(stories[index])
    setCurrentStoryIndex(index)
  }

  const closeStory = () => {
    setSelectedStory(null)
  }

  const nextStory = () => {
    const nextIndex = (currentStoryIndex + 1) % stories.length
    setSelectedStory(stories[nextIndex])
    setCurrentStoryIndex(nextIndex)
  }

  const prevStory = () => {
    const prevIndex = currentStoryIndex === 0 ? stories.length - 1 : currentStoryIndex - 1
    setSelectedStory(stories[prevIndex])
    setCurrentStoryIndex(prevIndex)
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

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="heading-lg mb-4">Сейчас у нас</h2>
            <p className="text-body text-neutral-600">Загружаем истории...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="heading-lg mb-4">Сейчас у нас</h2>
            <p className="text-body text-neutral-600">Загляните за кулисы нашей работы</p>
          </div>
          
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {stories.map((story, index) => (
              <div 
                key={story.id} 
                className="flex flex-col items-center cursor-pointer group flex-shrink-0"
                onClick={() => openStory(index)}
              >
                <div className="relative mb-3">
                  <div className="w-[70px] h-[85px] md:w-[90px] md:h-[110px] rounded-2xl overflow-hidden border-2 border-neutral-300 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
                    {story.mediaType === 'video' ? (
                      <video 
                        src={story.mediaUrl} 
                        muted 
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img 
                        src={story.mediaUrl} 
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-1">
                      <span className="text-white text-sm">
                        {story.mediaType === 'video' ? '▶' : '📷'}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 text-center max-w-20 leading-tight">{story.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedStory && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4" 
          onClick={closeStory}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button 
              onClick={closeStory}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              ×
            </button>

            {/* Progress bar */}
            <div className="absolute top-4 left-4 right-16 z-10">
              <div className="bg-white/20 rounded-full h-1">
                <div 
                  className="bg-white h-1 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStoryIndex + 1) / stories.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Story content */}
            <div className="flex flex-col items-center">
              <div className="max-w-full max-h-[70vh] rounded-2xl overflow-hidden">
                {selectedStory.mediaType === 'video' ? (
                  <video 
                    className="w-full h-full object-contain"
                    controls 
                    autoPlay 
                    muted
                  >
                    <source src={selectedStory.mediaUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={selectedStory.mediaUrl} 
                    alt={selectedStory.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              
              <div className="text-white text-center mt-6 max-w-2xl">
                <h3 className="text-xl font-semibold mb-2">{selectedStory.title}</h3>
                {selectedStory.description && (
                  <p className="text-white/80">{selectedStory.description}</p>
                )}
              </div>
            </div>

            {/* Navigation arrows */}
            <button 
              onClick={prevStory}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              ←
            </button>
            <button 
              onClick={nextStory}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  )
} 