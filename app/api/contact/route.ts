import { NextRequest, NextResponse } from 'next/server'
import { createLead } from '../../../lib/airtable'

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }

  try {
    const data = await request.json()
    
    const result = await createLead(data)
    
    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Заявка отправлена',
        id: result.id 
      })
    } else {
      return NextResponse.json({ 
        success: false, 
        error: result.error 
      }, { status: 400 })
    }
  } catch (error) {
    console.error('Ошибка обработки заявки:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Внутренняя ошибка сервера' 
    }, { status: 500 })
  }
} 