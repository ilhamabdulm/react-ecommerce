import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './Menu.style.scss'

import { selectDirectorySections } from '../../redux/directory/directorySelector'

import MenuItem from '../MenuItem/MenuItem'

const Menu = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
          linkUrl={section.linkUrl}
        />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Menu)
