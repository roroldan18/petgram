import React from 'react'
import { Helmet } from 'react-helmet';
import { Div, Subtitle, Title } from './stylesLayout';



type Props = {
    children: React.ReactNode
    title?: string,
    subtitle?: string,
}

export const Layout = ({children, title, subtitle}: Props) => {
  return (
    <>
        <Helmet>
            { title && <title>{title} | Petgram 🐶</title> }
            { subtitle && <meta name='description' content={subtitle} /> }
        </Helmet>
        <Div>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {children}
        </Div>
    </>
  )
}