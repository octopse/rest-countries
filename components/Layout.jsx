import Nav from './Nav'
import NextNProgress from 'nextjs-progressbar'

function Layout ({children}){
  return(
    <div className="font-nunito bg-lmrs-back min-h-screen">
      <NextNProgress color="#111517"/>
      <Nav />
      {children}
    </div>
  )
}
export default Layout