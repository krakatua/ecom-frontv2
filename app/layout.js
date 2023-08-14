'use client'
import { createGlobalStyle } from "styled-components"
import '../app/globals.css'

const GlobalStyles = createGlobalStyle`

  body{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default function RootLayout({ children }) {
  return (
    <>
      <GlobalStyles/>
      <body>{children}</body>
    </>
  )
}
