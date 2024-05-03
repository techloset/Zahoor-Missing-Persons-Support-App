export type User = {
  id?: string;
  displayName: string;
  email: string;
  photoURL?: string;
};
export type MissingPersonData = {
  id: string;
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
  reportLocation?: string;
  reportDescription?: string;
  reportedBy?: string;
  reportedByEmail?: string;
};

export type ButtonProps = {
  onPressLearnMore: () => void;
  titleText: string;
  accessibilityLabelText?: string;
};
export type CardProps = {
  data: MissingPersonData;
  onPress: () => void;
};
export type DetailsButtonProps = {
  onPress: () => void;
  title: string;
};
export interface ListItemProps {
  data: MissingPersonData;
  onPress: () => void;
}
export type ModalProps = {
  visible: boolean;
  onClose: () => void;
  data: MissingPersonData | null;
  location?: string;
  description?: string;
  userProfile?: User | null;
};

export type SearchBoxProps = {
  onChangeText: (text: string) => void;
};

export type AuthData = {
  email: string;
  password: string;
  name?: string;
  photoURL?: string;
};
export type InputTextType = {
  icon: boolean;
  editable?: boolean;
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
  isError?: boolean;
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
