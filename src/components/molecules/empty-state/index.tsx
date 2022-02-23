import React from 'react'

import { Typography, TypographyVariant } from 'components/atoms'

import EmptyStateImage from 'app/core/resources/empty-state-no-coins.png'

import styles from './styles.module.scss'

export enum EmptyStateType {
  emptyWallet = 'emptyWallet',
}

const emptyStateImages = { [EmptyStateType.emptyWallet]: EmptyStateImage }
const emptyStateTexts = {
  [EmptyStateType.emptyWallet]: "You don't have any coins yet!",
}
interface EmptyStateProps {
  type: EmptyStateType
}

const getImageType = (type: EmptyStateType): string => emptyStateImages[type]

const getTextType = (type: EmptyStateType): string => emptyStateTexts[type]

const EmptyState = ({
  type = EmptyStateType.emptyWallet,
}: EmptyStateProps): JSX.Element => (
  <div className={styles.container}>
    <img
      src={getImageType(type)}
      className={styles.image}
      alt="Empty State Image"
    />
    <Typography
      className={styles.text}
      text={getTextType(type)}
      variant={TypographyVariant.p}
    />
  </div>
)

export { EmptyState }
