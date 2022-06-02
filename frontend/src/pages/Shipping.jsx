import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import MetaData from '../components/MetaData'
import NewNavbar from '../components/NewNavbar'
import { Announcement } from '../components/Announcement'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styled from 'styled-components'
import Button from '@mui/material/Button';


const Title = styled.h1`
  margin: 20px;
  font-size: 40px;
  font-weight: 600;
  display: flex;
  justify-content: center;
`

const ShippingInfoContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CustomOrderButton = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`

const Shipping = () => {
  const [fullName, setFullName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [mail, setMail] = React.useState('')
  const [telephoneNumber, setTelephoneNumber] = React.useState('')
  return (
    <Fragment>
      <MetaData title="Thông tin giao hàng"/>
      <NewNavbar/>
      <Title>Thông tin vận chuyển</Title>
      <ShippingInfoContainer>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch'}
          }}
          noValidate
          autoComplete='off'
        >
          <div>
            <TextField
              required
              id='full-name'
              label='Họ Tên'
              variant='filled'
              placeholder='Nguyễn Văn A'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              required
              id='address'
              label='Địa chỉ'
              variant='filled'
              placeholder='Số X, Đường A, Phường A, Thành phố B, Tỉnh C'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <TextField
              required
              id='mail'
              label='Email'
              variant='filled'
              placeholder='abc@gmail.com'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              required
              id='telephone-number'
              label='SĐT'
              variant='filled'
              placeholder='09xxxxxxxx'
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
            />
          </div>
        </Box>
      </ShippingInfoContainer>
      <CustomOrderButton>
        <Button 
          variant='contained'
          // onClick={}
        >Bước tiếp theo</Button>
      </CustomOrderButton>
    </Fragment>
  )
}

export default Shipping