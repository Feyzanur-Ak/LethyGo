import PageContent from "./layout/PageContent"
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom"
import HomePage from "./pages/HomePage"


function App() {


  return (  
      <Router>
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage}   />
          
          </Switch>
      </PageContent>
      </Router>
  )
}

export default App
