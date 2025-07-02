import { AuthProvider } from "./contexts/AuthContext";
import Router from "./routers";

const App = () => {
  return <AuthProvider>
    <Router  />
  </AuthProvider>
}
export default App;