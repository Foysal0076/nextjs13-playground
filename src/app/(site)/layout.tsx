import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { LayoutProps } from '@/utils/types'

const SiteLayout = ({ children }: LayoutProps) => {
  return (
    <div className='flex min-h-screen flex-col justify-between'>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default SiteLayout
