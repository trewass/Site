'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputMask from 'react-input-mask'

const schema = yup.object({
  name: yup.string().required('Имя обязательно'),
  phone: yup.string().required('Телефон обязателен'),
  email: yup.string().optional().email('Неверный формат email'),
  service: yup.string().required('Выберите тип работ'),
  budget: yup.string().optional(),
  comment: yup.string().optional(),
  agreement: yup.boolean().oneOf([true], 'Необходимо согласие')
}).required()

type FormData = yup.InferType<typeof schema>

interface CallbackFormProps {
  onClose: () => void
  title?: string
  description?: string
}

export default function CallbackForm({ onClose, title = "Заказать замер", description = "Оставьте заявку и мы свяжемся с вами в течение 15 минут" }: CallbackFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    
    try {
      // Здесь будет отправка данных на сервер
      console.log('Отправляем данные:', data)
      
      // Имитация отправки
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitSuccess(true)
      setTimeout(() => {
        onClose()
        reset()
        setSubmitSuccess(false)
      }, 2000)
    } catch (error) {
      console.error('Ошибка отправки:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">Заявка отправлена!</h3>
          <p className="text-neutral-600">Мы свяжемся с вами в течение 15 минут</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
            <p className="text-neutral-600 text-sm mt-1">{description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Имя *
            </label>
            <input
              {...register('name')}
              type="text"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              placeholder="Ваше имя"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Телефон *
            </label>
            <InputMask
              {...register('phone')}
              mask="+7 (999) 999-99-99"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              placeholder="+7 (___) ___-__-__"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Тип работ *
            </label>
            <select
              {...register('service')}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
            >
              <option value="">Выберите тип работ</option>
              <option value="kitchen">Кухня</option>
              <option value="wardrobe">Гардероб</option>
              <option value="bathroom">Ванная</option>
              <option value="full-house">Дом под ключ</option>
              <option value="other">Другое</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Бюджет
            </label>
            <select
              {...register('budget')}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
            >
              <option value="">Не указан</option>
              <option value="300-500">300-500 тыс</option>
              <option value="500-800">500-800 тыс</option>
              <option value="800-1200">800 тыс - 1.2 млн</option>
              <option value="1200+">Более 1.2 млн</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Комментарий
            </label>
            <textarea
              {...register('comment')}
              rows={3}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              placeholder="Расскажите о вашем проекте..."
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              {...register('agreement')}
              type="checkbox"
              className="mt-1 h-4 w-4 text-neutral-600 focus:ring-neutral-500 border-neutral-300 rounded"
            />
            <label className="text-sm text-neutral-600">
              Я согласен на обработку персональных данных в соответствии с{' '}
              <a href="/privacy" className="text-neutral-900 underline">политикой конфиденциальности</a>
            </label>
          </div>
          {errors.agreement && (
            <p className="text-red-500 text-sm mt-1">{errors.agreement.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-neutral-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
          </button>
        </form>
      </div>
    </div>
  )
} 