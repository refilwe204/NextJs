import { fragment } from 'react';

function Layout(props){
   return <fragment>
   <main>
    {props.children}
   </main>
   </fragment>;

}

export default Layout;