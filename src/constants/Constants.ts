import Logo from '../assets/svg/Logo.svg';
import RoundedDiagram from '../assets/svg/RegistrationVector.svg';
import GoogleImage from '../assets/svg/Google.svg';
import LoginImage from '../assets/svg/LoginVector.svg';
import ThinkingVector from '../assets/svg/ThinkingVector.svg';
import BackspaceIcon from '../assets/svg/KeyboardBackspace.svg';
import HomeIcon from '../assets/svg/Home.svg';
import ProfileIcon from '../assets/svg/Profile.svg';
import PlusCircleIcon from '../assets/svg/PlusCircle.svg';
import Reports from '../assets/svg/HandsHelping.svg';
import SearchIcon from '../assets/svg/Search.svg';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Colors = {
  PRIMARY_COLOR: '#5B59FE',
  FADED_PRIMARY_COLOR: '#BCCEFF',
  SECONDARY_COLOR: '#0F0F0F',
  FADED_SECONDARY_COLOR: '#667085',
  WHITE_COLOR: '#FFFFFF',
  BORDER_COLOR: '#D0D5DD',
  FADED_BORDER_COLOR: '#D0D2D7',
  FADED_TEXT_COLOR: '#667085',
  ERROR_COLOR: '#CC4141',
};

export const Units = {
  WINDOW_WIDTH: windowWidth,
  WINDOW_HEIGHT: windowHeight,
};

export const Images = {
  GOOGLE_IMAGE: GoogleImage,
  LOGO: Logo,
  VECTOR_ROUNDED_DIAGRAM: RoundedDiagram,
  MAIL_ICON: require('../assets/images/MailIcon.png'),
  HERO_IMAGE: require('../assets/images/HeroImage.png'),
  VECTOR_DIAGRAM_LOGIN: LoginImage,
  THINKING_VECTOR: ThinkingVector,
  BACKSPACE_ICON: BackspaceIcon,
  HOME_ICON: HomeIcon,
  PROFILE_ICON: ProfileIcon,
  PLUS_CIRCLE_ICON: PlusCircleIcon,
  REPORTS_ICON: Reports,
  SEARCH_ICON: SearchIcon,
};
