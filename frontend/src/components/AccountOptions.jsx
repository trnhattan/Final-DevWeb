import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { Backdrop, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { logout } from '../redux/callAPI/userCall';




const StyledSpeedDial = styled(SpeedDial)`
  position: fixed;
  top:8px;
  right:30px;
  z-index:11;
`



const AccountOptions = ({currentUser}) => {

  const history = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  
  const options = [
    { icon: <AccountCircleIcon  />, name: 'Profile', func: account},
    { icon: <ShoppingCartOutlinedIcon />, name: 'Cart', func: cart },

    { icon: <ExitToAppIcon />, name: 'Logout', func: logoutUser },
  ];


  if (currentUser.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  
  
  function cart(){
    history("/cart");
  }

  function account(){
    history("/account");
  }
  function logoutUser(){
    dispatch(logout())
    alert("logout success!")
  }

  function dashboard(){

  }

  

  return (
      <Fragment>
        <Backdrop open={open} style={{zIndex: "10"}}/>
        <StyledSpeedDial
          ariaLabel='SpeedDial controlled open exampl'
          onClose={()=>setOpen(false)}
          onOpen={()=>setOpen(true)}
          open={open}
          icon={<SpeedDialIcon />}
          direction="down"
        >
          {options.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.func}
              // tooltipOpen={window.innerWidth <= 600 ? true : false}
            />
          ))}
        </StyledSpeedDial>
      </Fragment>
  );
}

export default AccountOptions