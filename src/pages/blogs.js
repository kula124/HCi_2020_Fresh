import React from 'react'
import HeaderFooterLayout from '../layouts/headerFooter'
import BlogsContainer from '../modules/BlogsContainer'

const Blogs = () => (
  <main>
    <HeaderFooterLayout activeTab="blogs" >
      <BlogsContainer />
    </HeaderFooterLayout>
  </main>
)

export default Blogs