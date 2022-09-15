import { FavoriteBorder, Search, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import styled from "styled-components"
import { Link } from "react-router-dom";
//import Announcement from "../Announcement/Announcement";


const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;

`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info} {
   opacity: 1;
}
`

const Circle = styled.div`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background-color:  #f5fbfd; //rgb(255, 244, 227);
   position: absolute;
`;
const Image = styled.img`
   height: 75%;
   z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: snow;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color:#ebe2e2;
    transform: scale(1.1);
  }
`;
//item are used as props rendering from datasets (popularProducts)
const Product = ({item}) => {
  return (
   <> 
    <Container>
     <Circle/>
    <Image src={item.img} />  
    <Info>
       <Icon>
       <ShoppingCartCheckoutOutlined />
        </Icon> 
        <Icon>
        <Link to={`${item._id}`}>
       <Search />
       </Link>
        </Icon>
        <Icon>
       <FavoriteBorder />
        </Icon>
        </Info> 
   </Container>
   </>
  )
}

export default Product