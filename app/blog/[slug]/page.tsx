import { getBlogPosts } from '../../../lib/airtable'
import { notFound } from 'next/navigation'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage?: string
  author: string
  category: string
  publishedDate: string
  featured: boolean
}

interface BlogPostPageProps {
  params: { slug: string }
  post: BlogPost | null
}

function BlogPostPage({ post }: BlogPostPageProps) {
  if (!post) {
    notFound()
  }

  return (
    <article className="blog-post py-16 bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-neutral-500">
              <li><a href="/" className="hover:text-neutral-800">Главная</a></li>
              <li>/</li>
              <li><a href="/blog" className="hover:text-neutral-800">Блог</a></li>
              <li>/</li>
              <li className="text-neutral-800">{post.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-neutral-400">
                {new Date(post.publishedDate).toLocaleDateString('ru-RU')}
              </span>
            </div>
            
            <h1 className="heading-lg mb-4">{post.title}</h1>
            
            <p className="text-body text-neutral-600 mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <span>Автор: {post.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-8">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-500">
                  Автор: {post.author}
                </span>
                <span className="text-sm text-neutral-400">
                  {new Date(post.publishedDate).toLocaleDateString('ru-RU')}
                </span>
              </div>
              
              <a 
                href="/blog"
                className="text-sm text-neutral-800 hover:text-neutral-600 transition-colors"
              >
                ← Назад к блогу
              </a>
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts()
    const paths = posts.map(post => ({
      slug: post.slug
    }))

    return paths
  } catch (error) {
    console.error('Ошибка генерации путей для статей:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const posts = await getBlogPosts()
    const post = posts.find(p => p.slug === params.slug)

    if (!post) {
      return {
        title: 'Статья не найдена',
        description: 'Запрашиваемая статья не найдена'
      }
    }

    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.featuredImage ? [post.featuredImage] : []
      }
    }
  } catch (error) {
    console.error('Ошибка генерации метаданных:', error)
    return {
      title: 'Блог',
      description: 'Статьи о мебели и дизайне'
    }
  }
}

export default async function BlogPostPageServer({ params }: { params: { slug: string } }) {
  try {
    const posts = await getBlogPosts()
    const post = posts.find(p => p.slug === params.slug)

    return <BlogPostPage post={post || null} params={params} />
  } catch (error) {
    console.error('Ошибка загрузки статьи:', error)
    return <BlogPostPage post={null} params={params} />
  }
} 