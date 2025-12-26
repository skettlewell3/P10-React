import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import AppContainer from './components/AppContainer';
import FooterNav from './components/FooterNav/FooterNav';
import HeaderProfile from './components/HeaderProfile/HeaderProfile';
import ContentContainer from './components/ContentContainer';

import NewsView from './components/Views/NewsView';
import StatsView from './components/Views/StatsView';
import PredictView from './components/Views/PredictView';
import ReviewView from './components/Views/ReviewView';
import BoardsView from './components/Views/BoardsView';

import { GameDataProvider } from './providers/GameDataProvider'
import { useUser } from './hooks/useUser';
import StateBootstrapper from './components/StateBootstrapper';

export default function AppWithUser() {
  const { user, handleLogout } = useUser();

  const [activeLens, setActiveLens] = useState("week");
  const [subjectType, setSubjectType] = useState("user");

  const handleSubmit = (e) => {
  e.preventDefault();
  const form = document.getElementById('predictionForm');
  if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  };

  return (
    <GameDataProvider userId={user?.user_id}>
      <StateBootstrapper>
        {({ activeWeek, setActiveWeek, currentGwStatus }) => (
          <AppContainer>
            <HeaderProfile 
              user={user} 
              onLogout={handleLogout}
            />
            <ContentContainer>
              <Routes>
                {/* default path - predict view */}
                <Route path="/" element={<Navigate to="/predict" replace />} /> 
                <Route path="*" element={<Navigate to="/predict" replace />} />
                <Route path='/news' element={<NewsView />} />
                <Route path='/stats' element={<StatsView />} />
                <Route 
                  path='/predict' 
                  element={
                    <PredictView
                      subjectType={subjectType}
                      setSubjectType={setSubjectType}
                      currentGwStatus={currentGwStatus}
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
                      currentGwStatus={currentGwStatus}
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
                      currentGwStatus={currentGwStatus}
                  />}
                />
              </Routes>
            </ContentContainer>
            <FooterNav handleSubmit={handleSubmit} />
          </AppContainer>
        )}
      </StateBootstrapper>
    </GameDataProvider>
  );
}
