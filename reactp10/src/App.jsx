import { useState } from 'react'
import './App.css'
import FooterNav from './components/FooterNav/FooterNav';

function App() {
  const [activeView, setActiveView] = useState("predict");

  return (
    <>
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
