export interface NavigationItem {
  name: string
  href: string
}

export interface Project {
  id: string
  title: string
  description: string
  category: 'kitchen' | 'wardrobe' | 'bathroom' | 'full-house'
  images: string[]
  location: string
  year: number
}

export interface Testimonial {
  id: string
  name: string
  text: string
  videoUrl?: string
  project: string
  rating: number
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  priceRange: string
} 