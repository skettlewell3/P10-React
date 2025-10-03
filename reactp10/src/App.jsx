import { useState } from 'react'
import './App.css'
import AppContainer from './components/AppContainer';
import FooterNav from './components/FooterNav/FooterNav';
import HeaderProfile from './components/HeaderProfile/HeaderProfile';
import ContentContainer from './components/ContentContainer';
import NewsView from './components/NewsView';
import StatsView from './components/StatsView';
import PredictView from './components/PredictView';
import ReviewView from './components/ReviewView';
import BoardsView from './components/BoardsView';

function App() {
  const [activeView, setActiveView] = useState("predict");

  return (
    <>
      <AppContainer>
        <HeaderProfile />     

        <ContentContainer>
          {activeView === "news" && <NewsView />}
          {activeView === "stats" && <StatsView />}
          {activeView === "predict" && <PredictView />}
          {activeView === "review" && <ReviewView />}
          {activeView === "boards" && <BoardsView />}
        </ContentContainer>          
        
        <FooterNav activeView={activeView} setActiveView={setActiveView} />
      </AppContainer>
    </>
  )
}

export default App
