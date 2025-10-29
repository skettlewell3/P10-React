import BetaLoginForm from './BetaLoginForm';
import { useUser } from '../../hooks/useUser';

export default function AuthGate({ children }) {
  const { user, handleLogin } = useUser();

  if (!user) {
    return <BetaLoginForm onLogIn={handleLogin} />;
  }

  return <>{children}</>;
}
