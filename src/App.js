import './App.css';
import styled from "styled-components";
import Pin from './img/pin.svg'
import Dribble from './img/dribble.svg'
import DribbleCouleurs from './img/dribble-couleur.svg'
import Linkedin from './img/linkedin.svg'
import LinkedinCouleurs from './img/linkedin-couleur.svg'
import Rogervoice from './img/projet/rogervoice.png'
import Airfund from './img/projet/airfund.png'
import Bnp from './img/projet/bnp.png'
import Malakoff from './img/projet/malakoffhumanis.png'
import Renault from './img/projet/renault.png'
import Autre from './img/projet/autres.png'


function App() {
  return (
    <div>
      <Navbar>
        <div className='container'>
        <div className='row'>
        <div className='col-md-4' align="left">
          <p>
           Cécile Chelim <br/>UX Designer Paris
          </p>
        </div>
        <div className='col-md-4' align="center">test</div>
        <div className='col-md-4' align="right">
          
        </div>
        </div>
        </div>
      </Navbar>
      <BlocContact>
        <a href="mailto:chelim.cecile@gmail.com" className='btn btn-primary'>Me contacter</a>
        <ul class="list-group list-group-horizontal">
          <a href="https://dribbble.com/cecile_chelim" target="blank" class="list-group-item list-group-item-action">
            <img src={Dribble} alt="Dribble" />
            <img src={DribbleCouleurs} alt="Dribble" />
          </a>
          <a href="https://www.linkedin.com/in/cecilechelim/?originalSubdomain=fr" target="blank" class="list-group-item list-group-item-action">
            <img src={Linkedin} alt="Linkedin" />
            <img src={LinkedinCouleurs} alt="Linkedin" />
          </a>
        </ul>
      </BlocContact>
      <Head>
        <Text>
          <h1>Je suis Cécile, <PhotoC></PhotoC></h1>
          <Fonction className='raleway'><i>Ux Designer</i></Fonction>
          <h1>basée à {" "}<img className='mr-3' src={Pin} alt="pin" /> Paris</h1>

        </Text>
      </Head>
      <Project>
        <div className='container'>
          <div className='row'>
            <div className='mt-5 mb-5 col-md-12 text-center'>
              <Speech>
                J’aide des superbes entreprises
                à créer les meilleurs produits et services pour leurs utilisateurs.<br />
                J'ai une appétence particulière pour les plateformes métier, les projets complexes, ceux dont on pense que le design n'est que secondaire...
                <br /><br />
                N'oubliez pas que <b>le design est l’ambassadeur silencieux de votre marque 🙂</b>
              </Speech>

            </div>
          </div>
          <RowProject className='row'>
            <BlocProjet>
              <img src={Bnp} alt="bnp" />
            </BlocProjet>
            <BlocProjet>
              <img src={Malakoff} alt="malakoff" />
            </BlocProjet>
            <BlocProjet>
              <img src={Rogervoice} alt="rogervoice" />
            </BlocProjet>
            <BlocProjet>
              <img src={Airfund} alt="airfund" />
            </BlocProjet>
            <BlocProjet>
              <img src={Renault} alt="renault" />
            </BlocProjet>
            <BlocProjet>
              <img src={Autre} alt="autres projets" />
            </BlocProjet>
            
          </RowProject>
        </div>
      </Project>

    </div>
  );
}



const Navbar = styled.div`
padding:3rem;
p{
  opacity:.6;
}
.container{
  border:1px solid red;
}
.col-md-4{
  border:1px solid green;
}
`;

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
    min-height: 80vh;
    padding-top: 15%;
`;

const BlocContact = styled.div`
background-color: rgb(255, 255, 255);
    opacity: 1;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px 0px;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    overflow: visible;
    padding: 8px 8px 8px 32px;
    position: relative;
    position: absolute;
    bottom: 3rem;
    left: 34%;

    a.btn{
      border-radius:100px;
      background-color:#fd5b1d;
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



const RowProject = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 3rem;
`;
const Speech = styled.p`
width: 70%;
margin: 0px auto;
font-size: 1.1rem;
line-height: 1.8rem;
color: #5d5d5d;
`;

const BlocProjet = styled.div`

padding:0;
border-radius:50px;
text-align:center;
flex-basis: 520px;


img{
  width:100%;
  transition:all ease .8s;
}

&:hover{
img{
  transform:scale(1.02);
}
}
`;



export default App;
