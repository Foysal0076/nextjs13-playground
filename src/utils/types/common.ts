export type PageParams = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export type PaginationOptionParams = {
  order?: 'asc' | 'desc'
  orderBy?: string
  currentPage?: number
  perPage?: number
}

export type LayoutProps = {
  children: React.ReactNode
}
