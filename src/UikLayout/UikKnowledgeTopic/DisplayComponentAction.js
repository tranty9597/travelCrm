import React from 'react'
import classnames from 'classnames'


import UikButton from '../UikButton'
import Uikon from '../Uikon'

import cls from './knowledge-topic.module.scss'

type DisplayComponentActionType = {
  className?: String,
}

const DisplayComponentAction = ({
  className,
  ...rest
}: DisplayComponentActionType) => (
  <UikButton
    className={ classnames(className) }
    icon={ (
      <Uikon className={ cls.dropdownIcon }>
        arrow_dropdown
      </Uikon>
    ) }
    iconRight
    { ...rest }
  >
    Actions
  </UikButton>
)

DisplayComponentAction.defaultProps = {
  className: null,
}

export default DisplayComponentAction
