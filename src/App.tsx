import { useState } from "react";
import { ProfileScreen } from "./screens/ProfileScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { UserDTO } from "./api";

function App() {
  const [user, setUser] = useState<UserDTO>();

  return user ? (
    <ProfileScreen user={user} onLogout={() => setUser(undefined)} />
  ) : (
    <LoginScreen onSuccess={setUser} />
  );
}

export default App;
