import { useState } from 'react'
import './App.css'
import AppContainer from './components/AppContainer';
import FooterNav from './components/FooterNav/FooterNav';
import HeaderProfile from './components/HeaderProfile/HeaderProfile';
import ContentContainer from './components/ContentContainer';
import NewsView from './components/Views/NewsView';
import StatsView from './components/Views/StatsView';
import PredictView from './components/Views/PredictView';
import ReviewView from './components/Views/ReviewView';
import BoardsView from './components/Views/BoardsView';
import { CURRENT_WEEK } from './config';
import AuthGate from './components/AuthGate/AuthGate';

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
    <AuthGate>
      {(user, handleLogout) => (
        <AppContainer>

          <HeaderProfile 
            user={user} 
            onLogout={handleLogout}
            overallRanking={1}
            overallScore={1000}
            
          />     

          <ContentContainer>
            {activeView === "news" && 
              <NewsView 
                
            />}
            {activeView === "stats" && 
              <StatsView 
              
            />}
            {activeView === "predict" && 
              <PredictView 
                
            />}
            {activeView === "review" && 
              <ReviewView
                activeWeek={activeWeek}
                setActiveWeek={setActiveWeek}
                subjectType={subjectType}
                setSubjectType={setSubjectType}

              />}
            {activeView === "boards" && 
              <BoardsView 
                activeView={activeView}
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
      )}
    </AuthGate>
  )
}

export default App
