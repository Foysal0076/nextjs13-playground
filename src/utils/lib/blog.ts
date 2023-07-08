import { Blog, BlogResponse, PaginationOptionParams } from '@/utils/types'

type FetchBlogParams = PaginationOptionParams & {
  category?: string
  search?: string
}

const defaultFetchBlogParams: FetchBlogParams = {
  orderBy: 'createdAt',
  currentPage: 1,
  perPage: 12,
}

export const fetchBlogs = async ({
  search = '',
  category = '',
  order = 'desc',
  orderBy = 'createdAt',
  currentPage = 1,
  perPage = 12,
}: FetchBlogParams = defaultFetchBlogParams): Promise<BlogResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?search=${search}&category=${category}&order=${order}&orderBy=${orderBy}&currentPage=${currentPage}&perPage=${perPage}`
  )
  if (!res.ok) {
    throw new Error('Failed to fetch blogs')
  }
  return res.json()
}

export const fetchBlog = async (slug: string): Promise<Blog> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`)
  if (!res.ok) {
    throw new Error('Failed to fetch blog')
  }
  return res.json()
}
