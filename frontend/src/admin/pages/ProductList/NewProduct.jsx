import React ,{Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {newProductSlice} from '../../../redux/Slice/productSlice'
import {newProduct} from '../../../redux/callAPI/productCall'
import TopBar from '../../components/topbar/TopBar';
import SideBar from '../../components/sidebar/SideBar';
import styled from '@emotion/styled';
import MetaData from '../../../components/MetaData'
import StorageIcon from '@mui/icons-material/Storage';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



const NewProductContainer = styled.div`
    flex:4;
    padding: 20px;
`
const Button = styled.button`

`

const NewProduct = () => {
    
    const dispatch = useDispatch();
    const history = useNavigate();

    const { isLoading, error, success } = useSelector(state => state.newProduct)

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [strap, setStrap] = useState("");
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState("");

    const categories = [
        "nam",
        "nu",
        "phukien",
    ]

    const colors = [
        "black",
        "white",
        "brown",
        "yellow",
        "silver"
    ]


    useEffect(()=>{

        if (success){
            alert("Thêm sản phẩm thành công !")
            history("/admin/products")
            dispatch(newProductSlice.actions.newProductReset())
        }
    },[dispatch,success,history])


    const createProductSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(newProduct({name,price,description, category,brand,color,strap,stock, image}))
    }

    console.log({name,price,description, category,brand,color,strap,stock, image})
  return (
    <Fragment>
        <MetaData title = "Thêm sản phẩm mới"/>
        <TopBar/>
        <div style={{display:"flex"}}>
            <SideBar/>
            <NewProductContainer>
                <form
                className="createProductForm"
                encType="multipart/form-data"
                onSubmit={createProductSubmitHandler}
                >
                <h1>Create Product</h1>

                <div>
                <SpellcheckIcon />
                <input
                    type="text"
                    placeholder="Product Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </div>

                <div>
                <DescriptionIcon />
                <textarea
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    cols="30"
                    rows="1"
                ></textarea>
                </div>


                <div>
                <DescriptionIcon />
                <textarea
                    placeholder="Product Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="1"
                ></textarea>
                </div>

                <div>
                <AccountTreeIcon />
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Choose Category</option>
                    {categories.map((cate) => (
                    <option key={cate} value={cate}>
                        {cate}
                    </option>
                    ))}
                </select>
                </div>

                <div>
                <DescriptionIcon />
                <select onChange={(e) => setColor(e.target.value)}>
                    <option value="">Chọn màu sắc</option>
                    {colors.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                    ))}
                </select>
                </div>

                <div>
                <DescriptionIcon />
                <textarea
                    placeholder="Strap"
                    value={strap}
                    onChange={(e) => setStrap(e.target.value)}
                    cols="30"
                    rows="1"
                ></textarea>
                </div>

                <div>
                <StorageIcon />
                <input
                    type="number"
                    placeholder="Stock"
                    required
                    onChange={(e) => setStock(e.target.value)}
                />
                </div>

                <div>
                <AttachMoneyIcon />
                <input
                    type="number"
                    placeholder="Price"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                />
                </div>

                <div>
                <DescriptionIcon />
                <textarea
                    placeholder="Link Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    cols="30"
                    rows="1"
                ></textarea>
                </div>


{/* 
                <div id="createProductFormFile">
                <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={createProductImagesChange}
                    multiple
                />
                </div> */}

                {/* <div id="createProductFormImage">
                {imagesPreview.map((image, index) => (
                    <img key={index} src={image} alt="Product Preview" />
                ))}
                </div> */}

                <Button
                id="createProductBtn"
                type="submit"
                // disabled={loading ? true : false}
                >
                Create
                </Button>
            </form>
            </NewProductContainer>
        </div>
    </Fragment>
  )
}

export default NewProduct