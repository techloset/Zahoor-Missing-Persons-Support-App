export type User = {
  displayName: string;
  email: string;
  photoURL: string;
};
export type FormData = {
  name: string;
  gender: '' | 'Male' | 'Female' | 'Trans';
  dateOfBirth: Date;
  nicknames: string;
  height: string;
  width: string;
  eyeColor: string;
  hairColor: string;
  lengthOfTheHair: string;
  lastSeen: Date;
  lastSeenLocation: string;
  imageUrl: string;
  userID: string;
};
export type ButtonProps = {
  onPressLearnMore: () => void;
  titleText: string;
  accessibilityLabelText?: string;
};
export type AuthData = {
  email: string;
  password: string;
  name?: string;
  photoURL?: string;
};
export type InputComponentsProps = {
  icon: boolean;
  name: string;
  value: string;
  validationText?: string;
  onChangeText: (text: string) => void;
  placeholderText: string;
  security?: boolean;
  keyboardType:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
};

export type Icon = {
  focused: JSX.Element;
  unfocused: JSX.Element;
};

export type CardData = {
  imageUrl: string;
  name: string;
  age: number;
  lastSeen: string;
  lastSeenLocation: string;
};

export type ScreenConfig = {
  name: string;
  component: React.ComponentType<any>;
  title: string;
  headerTitle?: string;
  icon: Icon;
  hideHeader?: boolean;
  tabBarVisible?: (props: { route: { name: string } }) => boolean;
};

export type AuthState = {
  user: User | null;
  error: string | null;
  loading: boolean;
};
