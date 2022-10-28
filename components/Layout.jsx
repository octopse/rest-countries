import Nav from './Nav'

function Layout ({children}){
  return(
    <div className="font-nunito bg-lmrs-back ">
      <Nav />
      {children}
    </div>
  )
}
export default Layout