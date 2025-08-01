'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    budgetRange: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ 
          name: '', 
          phone: '', 
          email: '', 
          serviceType: '', 
          budgetRange: '', 
          message: '' 
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form space-y-4">
      <div>
        <input 
          type="text" 
          placeholder="Ваше имя*" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required 
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
        />
      </div>
      
      <div>
        <input 
          type="tel" 
          placeholder="+7 (___) ___-__-__*" 
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          required 
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
        />
      </div>
      
      <div>
        <input 
          type="email" 
          placeholder="Email (необязательно)" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
        />
      </div>
      
      <div>
        <select 
          value={formData.serviceType}
          onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
        >
          <option value="">Выберите услугу*</option>
          <option value="Кухня">Кухня</option>
          <option value="Гардероб">Гардероб</option>
          <option value="Ванная">Ванная</option>
          <option value="Дом под ключ">Дом под ключ</option>
        </select>
      </div>
      
      <div>
        <select 
          value={formData.budgetRange}
          onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
        >
          <option value="">Бюджет (необязательно)</option>
          <option value="до 300 тыс">до 300 тыс</option>
          <option value="300-500 тыс">300-500 тыс</option>
          <option value="500-800 тыс">500-800 тыс</option>
          <option value="800 тыс - 1.5 млн">800 тыс - 1.5 млн</option>
          <option value="более 1.5 млн">более 1.5 млн</option>
        </select>
      </div>
      
      <div>
        <textarea 
          placeholder="Расскажите о вашем проекте (необязательно)" 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={4}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-800 focus:border-transparent resize-none"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Отправка...' : 'Заказать замер'}
      </button>
      
      {submitStatus === 'success' && (
        <div className="success-message p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          ✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="error-message p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          ❌ Ошибка отправки. Попробуйте еще раз или свяжитесь с нами по телефону.
        </div>
      )}
    </form>
  )
} 