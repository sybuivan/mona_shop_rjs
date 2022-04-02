import React from 'react'
import PropTypes from 'prop-types'
import ListProduct from './ListProduct'
import Information from './Information'
import BannerFill from './BannerFill'
import NewsComponent from './News/index'
import '../../assets/css/titleHome.scss'

function Content(props) {
  return (
    <section className="section-content">
    
       <ListProduct title="CHÓ CẢNH" length={8}/>

       <Information />

       <ListProduct title="MÈO CẢNH" length={8}/>

       <BannerFill />

       <ListProduct title="PHỤ KIỆN" length={4} />

       <NewsComponent />
    </section>
  )
}

Content.propTypes = {}

export default Content
