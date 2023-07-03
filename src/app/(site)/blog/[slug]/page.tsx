import { fetchBlog, fetchBlogs } from '@/utils/lib'
import { PageParams } from '@/utils/types'

// Return a list of `params` to populate the [slug] dynamic segment
export const generateStaticParams = async () => {
  const { results: blogs } = await fetchBlogs()

  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

const BlogPage = async ({ params: { slug } }: PageParams) => {
  const blog = await fetchBlog(slug)

  return (
    <div>
      <h1 className='heading-01'>{blog.title}</h1>
    </div>
  )
}

export default BlogPage
