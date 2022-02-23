import each from 'jest-each'

import { render, screen } from 'app/core/tests/utils'

import { Typography, TypographyVariant } from '.'

describe('Atom Typography', () => {
  each([Object.values(TypographyVariant)]).test(
    'Render Typography with %s variant',
    variant => {
      render(<Typography text="typography" variant={variant} />)
      expect(screen.getByText('typography')).toBeInTheDocument()
    }
  )
})
