import React from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

const Link: React.SFC<LinkProps> = ({ children, ...other }) => (
  <RouterLink {...other}>
    {children}
  </RouterLink>
)

export default Link

export type LinkProps = RouterLinkProps