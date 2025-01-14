import Header from "./Header"
import Footer from "./Footer"
// eslint-disable-next-line react/prop-types
const PageContent = ({children}) => {
  return (
    <div>
      <Header/>
      <main>
      {children}
      </main>
      <Footer/>
    </div>
  )
}

export default PageContent
