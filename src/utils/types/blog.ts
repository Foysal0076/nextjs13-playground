export type BlogResponse = {
  results: Blog[]
  meta: PaginationMeta
}

export type PaginationMeta = {
  perPage: number
  totalItems: number
  totalPage: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}

export type Blog = {
  id: number
  title: string
  slug: string
  featuredImage: string
  content: string
  isPublished: boolean
  publishedAt: null
  authorId: number
  createdAt: Date
  updatedAt: Date
  categories: BlogCategory[]
}

export type BlogCategory = {
  id: number
  title: string
  slug: string
  icon: string
  description: string
  featuredImage: string
  createdAt: Date
  updatedAt: Date
}
