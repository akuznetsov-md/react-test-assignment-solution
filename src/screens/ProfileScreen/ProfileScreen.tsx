import { UserDTO } from "../../api";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import {
  Screen,
  ScreenHeader,
  ScreenMain,
  ScreenFooter,
} from "../../components/Screen";
import "./ProfileScreen.css";

interface ProfileScreenProps {
  user: UserDTO;
  onLogout: () => void;
}

export function ProfileScreen({ user, onLogout }: ProfileScreenProps) {
  return (
    <Screen>
      <ScreenHeader>
        <Logo />
      </ScreenHeader>
      <ScreenMain className="profile">
        <img alt="" className="profile_avatar" src={user.avatar} />
        <h1 className="profile_header">That's it, {user.name}!</h1>
        <Button onClick={onLogout} className="profile_logout-button">
          <img alt="" src="/i24-logout.svg" />
          <span>Logout</span>
        </Button>
      </ScreenMain>
      <ScreenFooter />
    </Screen>
  );
}
