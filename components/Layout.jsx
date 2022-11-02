import Nav from './Nav'

function Layout ({children}){
  return(
    <div className="font-nunito bg-lmrs-back h-screen">
      <Nav />
      {children}
    </div>
  )
}
export default Layout