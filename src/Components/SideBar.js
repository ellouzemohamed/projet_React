import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Compétences from './Compétences'
import Expériences from './Expériences'
import Formations from './Formations'


const SideBar = () => {
    return (
        <div className='roww'> 

             <div className='rowwx'>
             <img src='/profile.jpg' className='im'alt='' />

               <h3 className='nom'>                   
                   Mohamed <br/>
                   Ellouze
               </h3>
               <h3 className='nom'>
                   Tèl: <br/>
                   +216 53 058 526
               </h3>

             </div>  
          <div className='rowwy'>
         
          <Switch>
             
             <Route exact path="/Compétences" component={Compétences} />
             <Route exact path="/Expériences" component={Expériences} />
             <Route exact path="/Formations" component={Formations} />

         </Switch>
        
          </div>
          </div>
    )
}

export default SideBar 