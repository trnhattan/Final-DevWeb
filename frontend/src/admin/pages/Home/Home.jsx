import React from 'react'
import styled from '@emotion/styled'

import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLarge from '../../components/widgetLarge/widgetLarge'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'

const HomeContainer = styled.div`
    flex: 4;
`

const HomeWidgetsContainer = styled.div`
    display: flex;
    margin: 20px;
`

export default function Home() {
  return (
    <HomeContainer>
        <FeaturedInfo/>
        <HomeWidgetsContainer>
            <WidgetSmall/>
            <WidgetLarge/>
        </HomeWidgetsContainer>
    </HomeContainer>
  )
}
