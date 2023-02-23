import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import GameList from './components/gameList/gameList';
import Game from './pages/gameDetail/game';
import PostApp from './pages/posts/postApp';
import CreatePost from "./pages/posts/createPost";
import Post from "./pages/posts/Post";

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="game/:id" element={<Game />}></Route>
                <Route path="games/:type" element={<GameList />}></Route>
                <Route path="games/posts"  element={<PostApp />}></Route>
                <Route path="games/posts/:id"  element={<Post />}></Route>
                <Route path="games/posts/createpost"  element={<CreatePost />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
