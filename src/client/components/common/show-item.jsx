/**
 * show item in folder
 */

import { memo } from 'react'
import { Icon } from 'antd'
// import { isMac } from '../../common/constants'
// import fs from '../../common/fs'

function onClick (e, href) {
  e.preventDefault()
  window._require('electron').shell.showItemInFolder(href)
}

export default memo(props => {
  const { to, children = '', ...rest } = props
  return (
    <a
      href={to}
      onClick={e => onClick(e, to)}
      {...rest}
    >
      {children} <Icon type='folder-open' />
    </a>
  )
})
