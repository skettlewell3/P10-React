import { UserProvider } from './providers/UserProvider';
import AppWithUser from './AppWithUser';
import { DatabaseProvider } from './providers/DatabaseProvider';

function App() {
  return (
    <DatabaseProvider>
      <UserProvider>
        <AppWithUser />
      </UserProvider>
    </DatabaseProvider>
  );
}

export default App;
