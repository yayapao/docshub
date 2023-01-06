import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface SolutionCardProps {
  tag: string
  title: string
  content?: ReactNode | string
}

const StyledSolutionCardContainer = styled('div')(() => {
  return {
    marginBottom: '.675rem',
    '& header': {
      fontWeight: 500,
      '& .tag': {
        backgroundColor: 'var(--ifm-color-primary)',
        color: '#fff',
        padding: '4px 8px',
        fontSize: '.875rem',
      },
      '& .title': {
        paddingLeft: '12px',
        padding: '4px 8px 4px 12px',
        background: 'var(--ifm-color-gray-200)',
      },
    },
  }
})

export const SolutionCard: React.FC<SolutionCardProps> = (props) => {
  const { tag, title, content } = props
  return (
    <StyledSolutionCardContainer>
      <header>
        <span className="tag">{tag}</span>
        <span className="title">{title}</span>
      </header>
      <section>{content}</section>
    </StyledSolutionCardContainer>
  )
}
