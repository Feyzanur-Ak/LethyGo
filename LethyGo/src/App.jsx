import PageContent from "./layout/PageContent"
import { Route, Switch  } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import SıgnUpPage from "./pages/SıgnUpPage"


function App() {


  return (  
     
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage}   />
          <Route exact path="/shop" component={ShopPage}   />
          <Route exact path="/login" component={SıgnUpPage}   />
          </Switch>
      </PageContent>
     
  )
}

export default App
