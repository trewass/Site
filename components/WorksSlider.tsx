'use client'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Work {
  id: string
  title: string
  description: string
  image: string
  category: string
  city: string
  duration: string
  cost: string
}

interface WorksSliderProps {
  works: Work[]
  onWorkClick?: (work: Work) => void
}

export default function WorksSlider({ works, onWorkClick }: WorksSliderProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="heading-lg mb-4">Наши работы</h2>
            <p className="text-body text-neutral-600">Загружаем работы...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="heading-lg mb-4">Наши работы</h2>
          <p className="text-body text-neutral-600">Посмотрите, что мы создаем для наших клиентов</p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="works-slider"
        >
          {works.map((work) => (
            <SwiperSlide key={work.id}>
              <div 
                className="group cursor-pointer"
                onClick={() => onWorkClick?.(work)}
              >
                <div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden mb-4 group-hover:shadow-lg transition-all duration-200">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <h3 className="font-semibold text-lg">{work.title}</h3>
                      <p className="text-sm opacity-90">{work.city}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                      {work.title}
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
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="text-center mt-8">
          <a href="/raboty" className="btn-primary">
            Смотреть все работы
          </a>
        </div>
      </div>
    </section>
  )
} 