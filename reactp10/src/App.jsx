import { useState } from 'react'
import './App.css'
import FooterNav from './components/FooterNav/FooterNav';
import HeaderProfile from './components/HeaderProfile/HeaderProfile';

function App() {
  const [activeView, setActiveView] = useState("predict");

  return (
    <>
    <HeaderProfile />
      <main>
        
        {/* {activeView === "news" && <NewsView />}
        {activeView === "stats" && <StatsView />}
        {activeView === "predict" && <PredictView />}
        {activeView === "review" && <ReviewView />}
        {activeView === "boards" && <BoardsView />} */}
      </main>
      <FooterNav activeView={activeView} setActiveView={setActiveView} />
    </>
  )
}

export default App
