import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NewNavbar from '../components/NewNavbar'
import Loader from '../components/Loader'
import styled from "styled-components"
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel';
import { Announcement } from '../components/Announcement'
import {getAllProducts} from '../redux/callAPI/productCall'
import { productsSlide } from '../redux/Slice/productSlice'
import ProductCard from '../components/ProductCard'
import { useLocation } from 'react-router-dom'

const Container = styled.div`

`

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter  = styled.div`
  margin: 20px;  
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const ListImage = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 5vmax;
    justify-content: center;
    min-height: 30vh;

`


const ProductList = () => {

  const { products, isLoading} = useSelector((state)=>state.products)
  const dispatch = useDispatch()
  const location = useLocation();

  let category = "" ;
  let title = "Tất cả sản phẩm";
  if (location.pathname.split("/").length > 2) {
    category = location.pathname.split("/")[2];
  }

  const [color, setColor] = useState("");
  const [strap, setStrap] = useState("");
  const [sortType, setSortType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [role, setRole] = useState("category");


  useEffect(()=>{
    // if(error){
    //   alert("Lỗi !")
    //   dispatch(productsSlide.actions.clearError());
    // }
    dispatch(getAllProducts({role, category, color, strap}))
  },[dispatch ,role, category,color, strap])



  return (
    <Container>
      <NewNavbar/>
      <Announcement/>
      <Title>
        Bộ lọc
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            Lọc sản phẩm:
          </FilterText>

          <FormControl variant="filled" sx={{ m: -1, minWidth: 120, marginRight: '20px'}}>
            <InputLabel id="color-select-disabled-label" disabled>Màu sắc</InputLabel>
            <Select
              labelId='color-select-disabled-label'
              id='color-select-disabled-label'
              value={color}
              label="color"
              onChange={(e)=>setColor(e.target.value)}
              // onChange={handleChangeColor}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'black'}>Đen</MenuItem>
              <MenuItem value={'white'}>Trắng</MenuItem>
            </Select>
          </FormControl> 

          <FormControl variant="filled" sx={{ m: -1, minWidth: 120, marginRight: '20px'}}>
            <InputLabel id="strap-select-disabled-label" disabled>Loại dây</InputLabel>
            <Select
              labelId='strap-select-disabled-label'
              id='strap-select-disabled-label'
              value={strap}
              label="strap"
              onChange={(e) => setStrap(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'kim loại'}>Kim loại</MenuItem>
              <MenuItem value={'da'}>Da</MenuItem>
            </Select>
          </FormControl> 


        </Filter>
        <Filter>
          <FilterText>
            Sắp xếp:
          </FilterText>
          <FormControl variant="filled" sx={{ m: -1, minWidth: 150, marginRight: '20px'}}>
            <InputLabel id="sort-select-disabled-label" disabled>Kiểu sắp xếp</InputLabel>
            <Select
              labelId='sort-select-disabled-label'
              id='sort-select-disabled-label'
              value={sortType}
              label="sortType"
              onChange={(e) => setSortType(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'newest'}>Mới nhất</MenuItem>
              <MenuItem value={'price-asc'}>Giá (tăng dần)</MenuItem>
              <MenuItem value={'price-desc'}>Giá (giảm dần)</MenuItem>
            </Select>
          </FormControl> 
        </Filter>
      </FilterContainer>


        <ListImage>
          {products && products.map((product)=>(
                        <ProductCard key={product._id} product={product} />
                    ))}
        </ListImage>
      <Footer/>
    </Container>
  )
}

export default ProductList