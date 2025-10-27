import {Routes, Route, Navigate } from 'react-router-dom'
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
import { FixtureProvider } from './components/Fixtures/FixtureProvider';

function App() {
  const [activeWeek, setActiveWeek] = useState(CURRENT_WEEK - 1)
  const [activeLens, setActiveLens] = useState("week");
  const [subjectType, setSubjectType] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for playing!")
  };

  return (
    <div id="appWindow">
      
      <AuthGate>
        {(user, handleLogout) => (
          <FixtureProvider>
            <AppContainer>

              <HeaderProfile 
                user={user} 
                onLogout={handleLogout}
                overallRanking={1}
                overallScore={1000}
                
              />     

              <ContentContainer>
                <Routes>
                  {/* default path - predict view */}
                  <Route path="/" element={<Navigate to="/predict" replace/>}/> 
                  <Route path="*" element={<Navigate to="/predict" replace />} />
                  
                  <Route path='/news' element={<NewsView />}/>
                  <Route path='/stats' element={<StatsView />}/>
                  <Route 
                    path='/predict' 
                    element={
                      <PredictView
                        subjectType={subjectType}
                        setSubjectType={setSubjectType}
                      />}
                  />
                  <Route 
                    path='/review' 
                    element={
                      <ReviewView
                        activeWeek={activeWeek}
                        setActiveWeek={setActiveWeek}
                        subjectType={subjectType}
                        setSubjectType={setSubjectType}
                      />}
                  />
                  <Route 
                    path='/boards' 
                    element={
                      <BoardsView 
                        activeWeek={activeWeek}
                        setActiveWeek={setActiveWeek}
                        activeLens={activeLens} 
                        setActiveLens={setActiveLens}
                        subjectType={subjectType}
                        setSubjectType={setSubjectType}
                      />}
                  />                  
                </Routes>
              </ContentContainer>      
              
              <FooterNav 
                handleSubmit={handleSubmit}
              />
            </AppContainer>
          </FixtureProvider>
        )}
      </AuthGate>
    </div>
  )
}

export default App
