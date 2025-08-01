const Airtable = require('airtable');

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY || 'patQfujQaKiRKW0ix.9968ac4d5d84d30dc7f7ac663c993282324a6cfb07125313b2c58268f943b4ee'
}).base(process.env.AIRTABLE_BASE_ID || 'appayVD9m1J1bR13Z');

// Получение проектов
export async function getProjects() {
  try {
    const records = await base('Projects').select({
      filterByFormula: '{Status} = "Опубликован"',
      sort: [{field: 'Featured', direction: 'desc'}]
    }).all();

    return records.map(record => ({
      id: record.id,
      name: record.get('Name'),
      type: record.get('Type'),
      city: record.get('City'),
      description: record.get('Description'),
      mainImage: record.get('Main Image')?.[0]?.url,
      gallery: record.get('Gallery')?.map(img => img.url) || [],
      featured: record.get('Featured')
    }));
  } catch (error) {
    console.error('Ошибка загрузки проектов:', error);
    return [];
  }
}

// Получение историй
export async function getStories() {
  try {
    const records = await base('Stories').select({
      filterByFormula: '{Status} = "Активна"',
      sort: [{field: 'Order', direction: 'asc'}]
    }).all();

    return records.map(record => ({
      id: record.id,
      title: record.get('Title'),
      videoFile: record.get('Video File')?.[0]?.url,
      thumbnail: record.get('Thumbnail')?.[0]?.url,
      duration: record.get('Duration'),
      type: record.get('Type')
    }));
  } catch (error) {
    console.error('Ошибка загрузки историй:', error);
    return [];
  }
}

// Получение статей блога
export async function getBlogPosts(limit = 10) {
  try {
    const records = await base('Blog Posts').select({
      filterByFormula: '{Status} = "Опубликована"',
      sort: [{field: 'Published Date', direction: 'desc'}],
      maxRecords: limit
    }).all();

    return records.map(record => ({
      id: record.id,
      title: String(record.get('Title') || ''),
      slug: String(record.get('Slug') || ''),
      excerpt: String(record.get('Excerpt') || ''),
      content: String(record.get('Content') || ''),
      featuredImage: record.get('Featured Image')?.[0]?.url || '',
      author: String(record.get('Author') || ''),
      category: String(record.get('Category') || ''),
      publishedDate: String(record.get('Published Date') || ''),
      featured: Boolean(record.get('Featured'))
    }));
  } catch (error) {
    console.error('Ошибка загрузки статей блога:', error);
    return [];
  }
}

// Сохранение заявки
export async function createLead(data) {
  try {
    const record = await base('Leads').create([{
      fields: {
        'Name': data.name,
        'Phone': data.phone,
        'Email': data.email,
        'Service Type': data.serviceType,
        'Budget Range': data.budgetRange,
        'Message': data.message,
        'Source': 'Сайт',
        'Status': 'Новая'
      }
    }]);
    return { success: true, id: record[0].id };
  } catch (error) {
    console.error('Ошибка создания заявки:', error);
    return { success: false, error: error.message };
  }
}

// Получение работ из Airtable (для страницы /raboty)
export async function getWorksFromAirtable() {
  try {
    const records = await base('tblg1UR9TmB4gLS7i').select({
      filterByFormula: 'IF({Страница работы}, TRUE(), FALSE())',
      sort: [{field: 'Дата загрузки', direction: 'desc'}]
    }).all();

    return records.map(record => ({
      id: record.id,
      projectName: record.get('Объект') || 'Проект',
      city: record.get('Город') || 'Город',
      category: record.get('Категория') || 'Мебель',
      description: record.get('Описание проекта') || '',
      materials: record.get('Материалы') || '',
      features: record.get('Особенности') || '',
      duration: record.get('Срок выполнения') || '45 дней',
      cost: record.get('Стоимость') || '',
      mainImage: record.get('Превью')?.[0]?.url || record.get('Ссылка'),
      mediaType: record.get('Тип файла') === 'video/mp4' ? 'video' : 'image',
      gallery: record.get('Галерея')?.map(img => img.url) || []
    }));
  } catch (error) {
    console.error('Ошибка загрузки работ из Airtable:', error);
    return [];
  }
}

// Получение кейсов из Airtable (для страницы /keisy)
export async function getCasesFromAirtable() {
  try {
    const records = await base('tblg1UR9TmB4gLS7i').select({
      filterByFormula: 'IF({Кейс}, TRUE(), FALSE())',
      sort: [{field: 'Дата загрузки', direction: 'desc'}]
    }).all();

    return records.map(record => ({
      id: record.id,
      projectName: record.get('Объект') || 'Проект',
      city: record.get('Город') || 'Город',
      description: record.get('Описание проекта') || '',
      mainImage: record.get('Превью')?.[0]?.url || record.get('Ссылка'),
      mediaType: record.get('Тип файла') === 'video/mp4' ? 'video' : 'image',
      gallery: record.get('Галерея')?.map(img => img.url) || []
    }));
  } catch (error) {
    console.error('Ошибка загрузки кейсов из Airtable:', error);
    return [];
  }
} 