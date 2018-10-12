import * as React from 'react'
import classnames from 'classnames'

import cls from './nav-link-2.module.scss'


type UikNavLinkTwoProps = {
  className?: ?String,
  children?: ?React.node,
  rightEl?: ?React.node,
  highlighted?: ?Boolean,
  icon?: React.node,
  Component?: React.ElementType
}

const UikNavLinkTwo = ({
  rightEl,
  children,
  className,
  highlighted,
  icon,
  Component,
  ...rest
}: UikNavLinkTwoProps) => (
  <Component
    className={ classnames(cls.wrapper, className, {
      [cls.highlighted]: highlighted,
    }) }
    { ...rest }
  >
    <span className={ cls.text }>
      {
        icon && (
        <span className={ cls.icon }>
          {icon}
        </span>
        )
      }
      {children}
    </span>
    {rightEl && (
    <span className={ cls.rightEl }>
      {rightEl}
    </span>
    )}
  </Component>
)

UikNavLinkTwo.defaultProps = {
  className: null,
  rightEl: null,
  highlighted: false,
  icon: null,
  children: null,
  Component: 'a',
}

export default UikNavLinkTwo
