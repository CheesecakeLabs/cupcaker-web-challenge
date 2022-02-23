import classNames from 'classnames'

import styles from './styles.module.scss'

export interface PanelProps {
  /**
   * element to render after the header
   */
  children: React.ReactNode
  /**
   * Classname to add custom css
   */
  className?: string
}

const Panel = ({ children, className }: PanelProps): JSX.Element => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  )
}

export { Panel }
