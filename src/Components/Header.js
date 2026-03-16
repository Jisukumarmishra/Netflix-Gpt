import React from 'react'


const Header = () => {
  return (
    <div className='absolute top-0 left-0 z-20 bold w-40 p-4'>
      <img  className='44'
      src = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt = "logo"
      />
    
    </div>
  )
}

export default Header

// const Body = () => {
  
//   const appRouter = createBrowseRouter([
//     {
//      path:"/",
//      element:<Login/>
//     },
    
//     {
//      path:"/browse",
//      element:<Browse/>
//     }

//     // {
//     //  path:"/",
//     //  element:<Body/>
//     // },

//     //     {
//     //  path:"/",
//     //  element:<Body/>
//     // }
    
//   ])

//   return (
//     <div><routerprovider router = {appRouter} /></div>
//   )
// }