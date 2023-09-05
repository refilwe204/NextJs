import { fragment } from 'react';

import MainHeader from './main-header';


function Layout(props){
   return (
   <fragment>
    <MainHeader />
   <main>{props.children} </main>
   </fragment>

   )

}

export default Layout;