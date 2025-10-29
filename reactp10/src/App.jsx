import { UserProvider } from './providers/UserProvider';
import AppWithUser from './AppWithUser';

function App() {
  return (
    <UserProvider>
      <AppWithUser />
    </UserProvider>
  );
}

export default App;
