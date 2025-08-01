'use client'
import { useState } from 'react'

interface FooterProps {
  onCallbackClick?: () => void
}

export default function Footer({ onCallbackClick }: FooterProps) {
  const [activeTab, setActiveTab] = useState('contacts')

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Левая колонка - Контакты */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Контакты</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Адрес</h4>
                <p className="text-neutral-300">
                  г. Ялта, ул. Московская, 15<br />
                  Шоурум мебели "Александр Кожа"
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Телефоны</h4>
                <div className="space-y-2">
                  <a 
                    href="tel:+79780000000" 
                    className="block text-neutral-300 hover:text-white transition-colors"
                  >
                    +7 (978) 000-00-00
                  </a>
                  <a 
                    href="tel:+73650000000" 
                    className="block text-neutral-300 hover:text-white transition-colors"
                  >
                    +7 (365) 000-00-00
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Email</h4>
                <a 
                  href="mailto:info@kozha-furniture.ru" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  info@kozha-furniture.ru
                </a>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Режим работы</h4>
                <p className="text-neutral-300">
                  Пн-Пт: 9:00 - 18:00<br />
                  Сб: 10:00 - 16:00<br />
                  Вс: Выходной
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Социальные сети</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/kozha_furniture" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://vk.com/kozha_furniture" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.27h-1.16c-.43 0-.56-.28-.56-.54 0-.16.05-.32.05-.32s-.05-.16-.05-.32c0-.26.13-.54.56-.54h1.16c.43 0 .56.28.56.54 0 .16-.05.32-.05.32s.05.16.05.32c0 .26-.13.54-.56.54zm-2.89-1.62c0 .26-.13.54-.56.54h-1.16c-.43 0-.56-.28-.56-.54 0-.16.05-.32.05-.32s-.05-.16-.05-.32c0-.26.13-.54.56-.54h1.16c.43 0 .56.28.56.54 0 .16-.05.32-.05.32s.05.16.05.32zm-2.89-1.62c0 .26-.13.54-.56.54h-1.16c-.43 0-.56-.28-.56-.54 0-.16.05-.32.05-.32s-.05-.16-.05-.32c0-.26.13-.54.56-.54h1.16c.43 0 .56.28.56.54 0 .16-.05.32-.05.32s.05.16.05.32zm-2.89-1.62c0 .26-.13.54-.56.54h-1.16c-.43 0-.56-.28-.56-.54 0-.16.05-.32.05-.32s-.05-.16-.05-.32c0-.26.13-.54.56-.54h1.16c.43 0 .56.28.56.54 0 .16-.05.32-.05.32s.05.16.05.32z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Правая колонка - Карта и форма */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Напишите нам</h3>
              <button
                onClick={onCallbackClick}
                className="bg-white text-neutral-900 px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
              >
                Рассчитать стоимость
              </button>
            </div>
            
            {/* Карта */}
            <div className="bg-neutral-800 rounded-lg p-4 h-64 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-neutral-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-neutral-400">
                  Карта загружается...
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  г. Ялта, ул. Московская, 15
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Нижняя часть */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 text-sm">
              © 2024 Александр Кожа. Все права защищены.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="/terms" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 