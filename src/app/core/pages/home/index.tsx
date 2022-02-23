import React from 'react'

import { Panel, Typography, TypographyVariant } from 'components/atoms'
import { EmptyState, EmptyStateType } from 'components/molecules'

import styles from './styles.module.scss'

const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Typography text="Watchlist" variant={TypographyVariant.h3} />
      <Panel className={styles.panel}>
        <EmptyState type={EmptyStateType.emptyWallet} />
      </Panel>
    </div>
  )
}

export default Home
