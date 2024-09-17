// src/App.js
import Header from "./components/header.js";
import Leaderboard from "./components/leader.js";
import SocialMediaTask from "./components/socialmedia.js";
import Footer from "./components/footer.js";
import Dashboard from "./components/dashboard.js";
import Taskboard from "./components/dashboard.js"
// build fro mobile view
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Leaderboard />
      <SocialMediaTask />
      <Dashboard/>
      <Footer />
    </div>
  );
}

export default App;