import './App.css';

import styled from "styled-components";
import Pin from './img/pin.svg'

const PhotoC = styled.div`
width: 300px;
border-radius: 200px;
height: 100px;
background-color:red;
background-image: url("./cecilechelim.jpeg");
background-position: 8% 34%;
background-size: 100%;
background-repeat: no-repeat;
margin-left:2rem;
`;

const Text = styled.div`
display:flex;
flex-direction:column;
align-items:center;

h1{
  display: flex;
  align-items: center;
  font-size: 5rem;
font-weight: 800;
}
`;

const Fonction = styled.h1`
color:#DDD;
font-style:italc;
`;

const Head = styled.header`
min-height: 100vh
    background-color: #F4F4F4;
    padding-top: 15%;
`;





function App() {
  return (
    <div className="App">
      <Head>
        <Text>
        <h1>Je suis Cécile, <PhotoC></PhotoC></h1>
        <Fonction className='raleway'><i>Ux Designer</i></Fonction>
        <h1>basée à <img src={Pin} alt="pin"/> Paris</h1>
      
        </Text>
      </Head>
    </div>
  );
}

export default App;
