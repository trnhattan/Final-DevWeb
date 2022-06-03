import React from 'react'
import styled from '@emotion/styled'

import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SideBarContainer = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255)
    position: sticky;
    top: 50px;
`

const SiderBarWrapper = styled.div`
    padding: 20px; 
    color: #555;

`

const SideBarMenu = styled.div`
    margin-bottom: 10px;
`

const SideBarTitle = styled.h2`
    font-size: 13px;
    color: lightgray;
`

const SiderBarList = styled.ul`
    list-style: none;
    padding: 5px;
`

const SiderBarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:hover{
        background-color: rgb(228, 228, 250)
    }
`

const SideBarIcon = {
    marginRight: '5px',
    fontSize: '20px'
}

export default function SideBar() {
  return (
      <SideBarContainer>
          <SiderBarWrapper>
              <SideBarMenu>
                  <SideBarTitle>Dashboard</SideBarTitle>
                  <SiderBarList>
                      <SiderBarListItem>
                        <HomeIcon style={SideBarIcon}/>
                        Home
                      </SiderBarListItem>
                      <SiderBarListItem>
                        <TimelineIcon style={SideBarIcon}/>
                        Analytics
                      </SiderBarListItem>
                      <SiderBarListItem>
                        <AttachMoneyIcon style={SideBarIcon}/>
                        Sales
                      </SiderBarListItem>
                  </SiderBarList>
              </SideBarMenu>
              <SideBarMenu>
                  <SideBarTitle>Quick Menu</SideBarTitle>
                  <SiderBarList>
                      <SiderBarListItem>
                        <PersonOutlineIcon style={SideBarIcon}/>
                        Users
                      </SiderBarListItem>
                      <SiderBarListItem>
                        <CategoryIcon style={SideBarIcon}/>
                        Products
                      </SiderBarListItem>
                      <SiderBarListItem>
                        <ShoppingCartIcon style={SideBarIcon}/>
                        Orders
                      </SiderBarListItem>
                  </SiderBarList>
              </SideBarMenu>
          </SiderBarWrapper>
      </SideBarContainer>
  )
}
