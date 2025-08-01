import { getBlogPosts } from '../../lib/airtable'

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

interface BlogPageProps {
  posts: BlogPost[]
}

function BlogPage({ posts }: BlogPageProps) {
  return (
    <div className="blog-page py-16 bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Блог</h1>
            <p className="text-body text-neutral-600">
              Полезные статьи о мебели, дизайне и ремонте
            </p>
          </div>

          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.id} className="blog-card bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                {post.featuredImage && (
                  <div className="blog-image">
                    <img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {new Date(post.publishedDate).toLocaleDateString('ru-RU')}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">
                      {post.author}
                    </span>
                    
                    <a 
                      href={`/blog/${post.slug}`}
                      className="text-sm text-neutral-800 hover:text-neutral-600 transition-colors"
                    >
                      Читать далее →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">Статьи пока не добавлены</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default async function BlogPageServer() {
  try {
    const posts = await getBlogPosts()
    return <BlogPage posts={posts} />
  } catch (error) {
    console.error('Ошибка загрузки статей блога:', error)
    return <BlogPage posts={[]} />
  }
} 