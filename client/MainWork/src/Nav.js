//import './styles/global.css'
import {
    Link,
    BrowserRouter,
 
    Route,
    
    Switch,
  } from 'react-router-dom'
import MarketPlace from "./Marketplace"
import Home from './create-item'
import XplayVids from './XplayVid'
import MyNFTS from './my-nfts'


function Navhan(){

  return (
      <>
      
      <BrowserRouter>
      <div className="App overflow-visible  top-0 w-full text-center border-b border-grey p-4" style={{
        height: '65px',
        display: 'flex',
        background: '#ffd429',
        color: '#ffd429',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
          <div>
        {/*  <img width={200} height={200} src="/Meta.png" /> */}
          </div>
          <div>
          <Link  style={{ padding: '0rem 3rem' }} className="text-2xl text-red-700 md:text-xl" to= './Marketplace'><b>MarketPlace</b></Link>
          </div>
          <div>
          <Link  style={{ padding: '0rem 3rem' }} className="text-2xl text-red-700 md:text-xl" to= './create-item'><b>Create NFts</b></Link>
          </div>
          <div>
          <Link  style={{ padding: '0rem 3rem' }} className="text-2xl text-red-700  md:text-xl" to= './XplayVid'><b>Play Vids</b></Link>
          </div>
          <div>
          <Link  style={{ padding: '0rem 3rem' }} className="text-2xl text-red-700 md:text-xl" to= './my-nft'><b>My Nfts</b></Link>
          </div>
   
        </div >
      <div>
       <Switch>
          <Route path="/login/" component={MarketPlace} ></Route>
          <Route path="/" component={Home} exact></Route>
          <Route path="/Marketplace" component={MarketPlace} ></Route>
          <Route path="/create-item" component={Home} exact></Route>
          <Route path="/XplayVid" component={XplayVids} ></Route>
          <Route path="/my-nft" component={MyNFTS} ></Route>
        </Switch>
      </div>
    </BrowserRouter>
   

      </>
  )

}
export default Navhan;