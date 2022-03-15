import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos"
import "./app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SearchPage from "./components/SearchPage/SearchPage"

function App() {
  fetch("https://www.googleapis.com/youtube/v3/channels?id=7lCDEYXw3mM&key=AIzaSyDOxBrafja1d7GLIhgcnM_zwGP-87zfrF0&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics") 
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });

return (
  <div className="app">
     <Router>
      <Header />

        <Switch>
          <Route path="/search/:searchTerm">
          <div className= "app__page">
             <Sidebar />
             <SearchPage />
             </div>
          </Route>

         <Route path="/">
           <div className= "app__page">
             <Sidebar />
             <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
</div>
  )
}

export default App;
