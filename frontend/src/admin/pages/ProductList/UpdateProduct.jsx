import React, {Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import {getProductDetail, updateProduct} from '../../../redux/callAPI/productCall'
import {productSlice, updateDeleteProductSlice} from '../../../redux/Slice/productSlice'
import SideBar from '../../components/sidebar/SideBar';
import TopBar from '../../components/topbar/TopBar';
import styled from '@emotion/styled';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';




const UpdateProductContainer = styled.div`
flex:4;
padding: 20px;
`
const Button = styled.button`

`


const UpdateProduct = () => {
    const history = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { error, product } = useSelector((state) => state.product);

    const {
        isLoading,
        error: updateError,
        isUpdated,
      } = useSelector((state) => state.updateDeleteProduct);

    const productId = location.pathname.split('/')[3]

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [strap,setStrap] = useState("");
    const [stock, setStock] = useState(0);
    const [images, setImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    // const [imagesPreview, setImagesPreview] = useState([]);



    useEffect(()=>{
        if (product && product._id !== productId || !product) {
            dispatch(getProductDetail(productId));
        }
        else {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setCategory(product.category);
            setBrand(product.brand);
            setColor(product.color);
            setStrap(product.strap);
            setStock(product.stock);
            setOldImages(product.images);
        }
        // if (error) {
        //     alert.error(error);
        //     dispatch(productSlice.actions.clearError());
        // }
        // if (updateError) {
        //     alert.error(updateError);
        //     dispatch(updateDeleteProductSlice.actions.clearErr());
        // }
        if (isUpdated) {
            alert("Sản phẩm đã được cập nhật !");
            history("/admin/products");
            dispatch(updateDeleteProductSlice.actions.updateProuctReset());
        }

    }, [dispatch,error,updateError,history,productId,product,isUpdated])


    const categories = [
        "nam",
        "nu",
        "phukien",
    ]

    const updateProductSubmitHandler = (e) => {
        e.preventDefault();
        // const myForm = new FormData();

        // myForm.set("name", name);
        // myForm.set("price", price);
        // myForm.set("description", description);
        // myForm.set("category", category);
        // myForm.set("stock", stock);

        // images.forEach((image) => {
        // myForm.append("images", image);
        // });

        dispatch(updateProduct([productId, {name, price, description, category,brand,color,strap, stock}]));
    }


    const updateProductImagesChange = (e) => {

    }



  return (
    <Fragment>
        <TopBar/>
        <div style={{display:"flex"}}>
            <SideBar/>
            <UpdateProductContainer>
                    <form
                    className="createProductForm"
                    encType="multipart/form-data"
                    onSubmit={updateProductSubmitHandler}
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
                    <AttachMoneyIcon />
                    <input
                        type="number"
                        placeholder="Price"
                        required
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
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
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Phân loại</option>
                        {categories.map((cate) => (
                        <option key={cate} value={cate}>
                            {cate}
                        </option>
                        ))}
                    </select>
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
                        placeholder="Color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        cols="30"
                        rows="1"
                    ></textarea>
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
                        value={stock}
                    />
                    </div>

                    <div id="createProductFormFile">
                    <input
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={updateProductImagesChange}
                        multiple
                    />
                    </div>

                    {/* <div id="createProductFormImage">
                    {oldImages &&
                        oldImages.map((image, index) => (
                        <img key={index} src={image.url} alt="Old Product Preview" />
                        ))}
                    </div> */}

                    {/* <div id="createProductFormImage">
                    {imagesPreview.map((image, index) => (
                        <img key={index} src={image} alt="Product Preview" />
                    ))}
                    </div> */}

                    <Button
                    id="createProductBtn"
                    type="submit"
                    // disabled={isLoading ? true : false}
                    >
                    UPDATE
                    </Button>
                </form>
            </UpdateProductContainer>
        </div>
    </Fragment>
  )
}

export default UpdateProduct