import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;   
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;  
`


export const Announcement = () => {
  return (
    <Container>
        DEAL SẬP SÀN DỊP 1/6. GIẢM 50% MỌI MẶT HÀNG! 
    </Container>
  )
}
