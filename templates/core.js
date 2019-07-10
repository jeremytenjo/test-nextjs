import React from 'react'
import styled from 'styled-components'
import TextField from '@tenjo/web-features/build/Input/Form/Text-Field/Ui/React/Styles/style1'
import Tabs from '@tenjo/web-features/build/Navigation/Tabs/Ui/React/Styles/2/tabs.2.index.js'
import { useRouter } from 'next/router'

const DataTabs2 = [
  { label: 'MOVIES', link: '/' },
  { label: 'TV SHOWS', link: '/tvshows' }
]

const HeaderFooter = ({ children }) => {
  const router = useRouter()

  const handleonSubmitSuccess = ({ query }) => {
    console.log(query)
  }

  return (
    <Wrapper>
      <Tabs data={DataTabs2} router={router} pathname={router.pathname} />
      {children}
      {/* <TextField /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (min-width: 500px) {
    display: none;
  }
`
export default HeaderFooter
