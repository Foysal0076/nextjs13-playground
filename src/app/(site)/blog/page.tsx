import { fetchBlogs } from '@/utils/lib'

const BlogsPage = async () => {
  const data = await fetchBlogs()
  const { meta: paginationOptions, results } = data

  return (
    <div>
      {results.map((blog) => (
        <div key={blog.id} className='block text-neutral-500'>
          <h1 className='heading-01 mb-4'>{blog.title}</h1>
          {/* <p>{parse(blog.content)}</p> */}
        </div>
      ))}
    </div>
  )
}

export default BlogsPage
