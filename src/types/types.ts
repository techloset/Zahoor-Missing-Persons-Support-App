export type User = {
  name: string;
  email: string;
  password: string;
};
export type MissingPerson = {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: string;
  nickName: string;
  height: number;
  width: number;
  eyeColor: string;
  hairColor: string;
  lengthOfTheHair: number;
  image: string;
};
export type FormData = {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  nicknames: string;
  height: string;
  width: string;
  eyeColor: string;
  hairColor: string;
  lengthOfTheHair: string;
  lastSeen: string;
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

export type ScreenConfig = {
  name: string;
  component: React.ComponentType<any>;
  title: string;
  headerTitle?: string;
  icon: Icon;
  hideHeader?: boolean;
  tabBarVisible?: (props: { route: { name: string } }) => boolean;
};
