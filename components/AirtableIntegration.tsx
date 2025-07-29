'use client'
import { useState, useEffect } from 'react'

const AIRTABLE_CONFIG = {
  API_KEY: 'patQfujQaKiRKW0ix.9968ac4d5d84d30dc7f7ac663c993282324a6cfb07125313b2c58268f943b4ee',
  BASE_ID: 'appayVD9m1J1bR13Z',
  TABLE_ID: 'tblg1UR9TmB4gLS7i'
}

interface MediaItem {
  id: string
  title: string
  description: string
  mediaUrl: string
  mediaType: 'video' | 'image'
  fileName: string
  project: string
}

interface ProjectGroup {
  projectName: string
  photos: MediaItem[]
}

export default function AirtableIntegration() {
  const [works, setWorks] = useState<ProjectGroup[]>([])
  const [cases, setCases] = useState<ProjectGroup[]>([])
  const [loading, setLoading] = useState(true)

  // Функция загрузки фото для разных разделов
  async function loadPhotosFromAirtable(section: string): Promise<MediaItem[]> {
    const filters = {
      'stories': 'AND({Порядок Stories}>0)',
      'works': 'AND({Страница работы}=TRUE())',
      'cases': 'AND({Кейс}=TRUE())',
      'homepage': 'AND({Главная страница}=TRUE())'
    }

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_CONFIG.BASE_ID}/${AIRTABLE_CONFIG.TABLE_ID}?filterByFormula=${filters[section as keyof typeof filters]}&sort[0][field]=Дата загрузки&sort[0][direction]=desc`,
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
        title: record.fields['Объект'] || 'Наш проект',
        description: record.fields['Описание фото'] || record.fields['Описание'] || '',
        mediaUrl: record.fields['Ссылка'],
        mediaType: record.fields['Тип файла'] === 'video/mp4' ? 'video' : 'image',
        fileName: record.fields['Имя файла'] || '',
        project: record.fields['Объект'] || 'Проект'
      }))
    } catch (error) {
      console.error(`Ошибка загрузки ${section}:`, error)
      return []
    }
  }

  // Группировка медиа по проектам
  function groupByProject(mediaItems: MediaItem[]): ProjectGroup[] {
    const groups: { [key: string]: MediaItem[] } = {}
    
    mediaItems.forEach(item => {
      if (!groups[item.project]) {
        groups[item.project] = []
      }
      groups[item.project].push(item)
    })
    
    return Object.keys(groups).map(projectName => ({
      projectName,
      photos: groups[projectName]
    }))
  }

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      
      try {
        const [worksData, casesData] = await Promise.all([
          loadPhotosFromAirtable('works'),
          loadPhotosFromAirtable('cases')
        ])
        
        setWorks(groupByProject(worksData))
        setCases(groupByProject(casesData))
      } catch (error) {
        console.error('Ошибка загрузки данных:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [])

  const openProjectGallery = (projectName: string, photos: MediaItem[]) => {
    // Создаем модальное окно с галереей
    const modal = document.createElement('div')
    modal.className = 'project-modal'
    
    modal.innerHTML = `
      <div class="project-content">
        <div class="project-header">
          <h2>${projectName}</h2>
          <button class="close-modal" onclick="this.closest('.project-modal').remove()">×</button>
        </div>
        
        <div class="project-gallery">
          ${photos.map((photo, index) => `
            <div class="gallery-item ${index === 0 ? 'active' : ''}" onclick="setActivePhoto(${index})">
              ${photo.mediaType === 'video' 
                ? `<video src="${photo.mediaUrl}" controls></video>`
                : `<img src="${photo.mediaUrl}" alt="${photo.title}">`
              }
            </div>
          `).join('')}
        </div>
        
        <div class="project-info">
          <p>${photos[0].description}</p>
          <button class="order-similar">Заказать похожую</button>
        </div>
      </div>
    `
    
    document.body.appendChild(modal)
    document.body.style.overflow = 'hidden'
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-neutral-600">Загружаем проекты...</p>
      </div>
    )
  }

  return (
    <div className="airtable-integration">
      {/* Works Gallery */}
      {works.length > 0 && (
        <section className="works-section py-12">
          <div className="container-custom">
            <h2 className="heading-lg mb-8 text-center">Наши работы</h2>
            <div className="works-gallery">
              {works.map((project) => (
                <div 
                  key={project.projectName}
                  className="work-card"
                  onClick={() => openProjectGallery(project.projectName, project.photos)}
                >
                  <div className="work-image">
                    <img 
                      src={project.photos[0].mediaUrl} 
                      alt={project.projectName}
                      loading="lazy"
                    />
                    <div className="work-overlay">
                      <span className="photo-count">{project.photos.length} фото</span>
                    </div>
                  </div>
                  <div className="work-info">
                    <h3>{project.projectName}</h3>
                    <p>{project.photos[0].description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cases Gallery */}
      {cases.length > 0 && (
        <section className="cases-section py-12 bg-neutral-50">
          <div className="container-custom">
            <h2 className="heading-lg mb-8 text-center">Наши кейсы</h2>
            <div className="cases-container">
              {cases.map((project) => (
                <div 
                  key={project.projectName}
                  className="case-card"
                  onClick={() => openProjectGallery(project.projectName, project.photos)}
                >
                  <div className="case-image">
                    <img 
                      src={project.photos[0].mediaUrl} 
                      alt={project.projectName}
                    />
                  </div>
                  <div className="case-content">
                    <h3>{project.projectName}</h3>
                    <p>{project.photos[0].description}</p>
                    <span className="case-link">Подробнее →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
} 