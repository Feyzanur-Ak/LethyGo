import PageContent from "./layout/PageContent"
import { Route, Switch  } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"


function App() {


  return (  
     
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage}   />
          <Route exact path="/shop" component={ShopPage}   />
          </Switch>
      </PageContent>
     
  )
}

export default App
