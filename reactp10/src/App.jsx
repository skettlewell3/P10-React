import { UserProvider } from './providers/UserProvider';
import { DatabaseProvider } from './providers/DatabaseProvider';
import  AuthGate  from './components/AuthGate/AuthGate';
import  AppWithUser  from './AppWithUser';

function App() {
  return (
    <DatabaseProvider>
      <UserProvider>
        <AuthGate>
          <AppWithUser />
        </AuthGate>
      </UserProvider>
    </DatabaseProvider>
  );
}

export default App;
