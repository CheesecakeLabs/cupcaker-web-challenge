import LogoImage from 'app/core/resources/ckl-logo.png'

import styles from './styles.module.scss'

export interface HeaderProps {
  /**
   * element to render after the header
   */
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} alt={'Logo Cheesecake'} src={LogoImage} />
      </div>
      <div>{children}</div>
    </div>
  )
}

export { Header }
