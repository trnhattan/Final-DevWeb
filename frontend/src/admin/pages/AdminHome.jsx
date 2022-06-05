import TopBar from "../components/topbar/TopBar"
import styled from "@emotion/styled"
import SideBar from "../components/sidebar/SideBar"
import Home from "./Home/Home"

const AdminHomeContainer = styled.div`
  display: flex;  
`

export default function AdminHome() {
  return (
    <div>
        <TopBar></TopBar>
        <AdminHomeContainer>
          <SideBar/>
          <Home/>
        </AdminHomeContainer>
    </div>
  )
}
