import React, { Fragment, useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import TopBar from '../../components/topbar/TopBar'
import styled from '@emotion/styled'
import SideBar from '../../components/sidebar/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import {getUserDetailAdmin} from '../../../redux/callAPI/userCall'
import {GetUserDetailSlice, ProfileSlice} from '../../../redux/Slice/userSlice'
import Loader from '../../../components/Loader'
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import {updateUserRole} from '../../../redux/callAPI/userCall'

const UpdateUserContainer = styled.div`
    flex:4;
    padding: 20px;
`


const Button = styled.button`

`

const UpdateUser = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { isLoading, error, user } = useSelector((state) => state.userDetail);
    const { isUpdated, isLoading: UpdateLoading, error: updateError } = useSelector((state) => state.userProfile);

    const userId = location.pathname.split("/")[3];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");


    const updateUserSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUserRole([userId,{name,email,role}]))
    }

    useEffect(()=>{
        if (user && user._id !== userId){
            dispatch(getUserDetailAdmin(userId))
        }
        else{
            setName(user.name);
            setEmail(user.email);
            setRole(user.role);
        }
        if (error){
            alert("Lỗi !")
            dispatch(GetUserDetailSlice.actions.clearErr())
        }
        if (updateError){
            alert("Lỗi !")
            dispatch(ProfileSlice.actions.clearErr())
        }
        if (isUpdated){
            alert("Cập nhật role thành công !")
            dispatch(ProfileSlice.actions.updateProfileReset())
            history("/admin/users") 
        }

    }, [dispatch, error,updateError, user,userId,history,isUpdated])

  return (
    <Fragment>
        <TopBar/>
        <div style={{display:"flex"}}>
            <SideBar/>
            <UpdateUserContainer>
                {isLoading ? <Loader/>: (
                    <Fragment>
                        <form
                            className="createProductForm"
                            onSubmit={updateUserSubmitHandler}
                            >
                            <h1>Update User</h1>

                            <div>
                                <PersonIcon />
                                <input
                                type="text"
                                placeholder="Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <MailOutlineOutlinedIcon />
                                <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <VerifiedUserIcon />
                                <select value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="">Choose Role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                                </select>
                            </div>

                            <Button
                                id="createProductBtn"
                                type="submit"
                                // disabled={
                                // updateLoading ? true : false || role === "" ? true : false
                                // }
                            >
                                Update
                            </Button>
                            </form>
                    </Fragment>
                )}
            </UpdateUserContainer>
        </div>
    </Fragment>
  )
}

export default UpdateUser