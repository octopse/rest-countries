import Nav from './Nav'

function Layout ({children}){
  return(
    <div className="font-nunito bg-lmrs-back min-h-screen">
      <Nav />
      {children}
    </div>
  )
}
export default Layout