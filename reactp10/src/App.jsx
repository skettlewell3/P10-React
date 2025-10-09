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
import { CURRENT_WEEK } from './config';

function App() {
  const [activeView, setActiveView] = useState("predict");
  const [activeWeek, setActiveWeek] = useState(CURRENT_WEEK - 1)
  const [activeLens, setActiveLens] = useState("week");
  const [subjectType, setSubjectType] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for playing!")
  };

  return (
    <>
      <AppContainer>
        <HeaderProfile />     

        <ContentContainer>
          {activeView === "news" && <NewsView />}
          {activeView === "stats" && <StatsView />}
          {activeView === "predict" && <PredictView />}
          {activeView === "review" && 
            <ReviewView
              activeWeek={activeWeek}
              setActiveWeek={setActiveWeek}
              subjectType={subjectType}
              setSubjectType={setSubjectType}
            />}
          {activeView === "boards" && 
            <BoardsView 
              activeWeek={activeWeek}
              setActiveWeek={setActiveWeek}
              activeLens={activeLens} 
              setActiveLens={setActiveLens}
              subjectType={subjectType}
              setSubjectType={setSubjectType}
            />}
        </ContentContainer>          
        
        <FooterNav 
          activeView={activeView} 
          setActiveView={setActiveView} 
          handleSubmit={handleSubmit}
        />
      </AppContainer>
    </>
  )
}

export default App
