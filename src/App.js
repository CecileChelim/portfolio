import './App.css';
import styled from "styled-components";
import Pin from './img/pin.svg'
import Dribble from './img/dribble.svg'
import DribbleCouleurs from './img/dribble-couleur.svg'
import Linkedin from './img/linkedin.svg'
import LinkedinCouleurs from './img/linkedin-couleur.svg'
import Mail from './img/mail.png'

function App() {
  return (
    <div>
    <BlocContact>
      <a href="mailto:chelim.cecile@gmail.com"  className='btn btn-primary'>Me contacter</a>
      <ul class="list-group list-group-horizontal">
      <a href="https://dribbble.com/cecile_chelim" target="blank" class="list-group-item list-group-item-action">
        <img src={Dribble} alt="Dribble"/>
        <img src={DribbleCouleurs} alt="Dribble"/>
        </a>
      <a href="https://www.linkedin.com/in/cecilechelim/?originalSubdomain=fr" target="blank" class="list-group-item list-group-item-action">
        <img  src={Linkedin} alt="Linkedin"/>
        <img src={LinkedinCouleurs} alt="Linkedin"/>
        </a>
    </ul>
    </BlocContact>
    <div className="container">
      <Head>
        <Text>
        <h1>Je suis Cécile, <PhotoC></PhotoC></h1>
        <Fonction className='raleway'><i>Ux Designer</i></Fonction>
        <h1>basée à {" "}<img className='mr-3' src={Pin} alt="pin"/> Paris</h1>
      
        </Text>
      </Head>
      <Project>
        <div className='container'>
          <div className='row'>
            <BlocProjet  className='col-md-6 malakoff'>
              <img src="https://www.aboghanbari.com/static/a89fe8a4ad332d942da74da90f09fb8f/75352/Flop.png"/>
            </BlocProjet>
          </div>
        </div>

      </Project>
    </div>
    </div>
  );
}

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
img{
  margin-right:.8rem;
  margin-left:.8rem;
}
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

const BlocContact = styled.div`
position: fixed;
    bottom: 2rem;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    a.btn{
      border-radius:100px;
      background-color:#000;
      margin-right: 2rem;
      border: 0;
      padding: 0.8rem 2rem;
      transition:all ease .2s;
      &:hover{
        font-weight:bold;
        background-color:#353434;
      }
    }

ul{
  a{
    padding: 1.5rem;
    margin-right: 2rem;
    position: relative;
    border-radius: 100px !important;
    background: #fff;
    border:0;
    width: 38px;
    
    img {
      position: absolute;
      top:5px;
      left:5px;
      width:38px;
      transition:all ease .2s;
      &:first-child{
        z-index: 1;
      }
      &:last-child{
        z-index: 2;
        opacity:0;
      }
      
    }
    &:hover{
      img{
        transform: scale(1.1);
        &:first-child{
          z-index: 2;
          opacity:0;
        }
        &:last-child{
          z-index: 1;
          opacity:1;
        }
        
        
      }
    }
  }
}
`;

const Project = styled.section`
padding:2rem;
`;

const BlocProjet = styled.div`
padding:2rem;
img{
  width:100%;
}
`;



export default App;
