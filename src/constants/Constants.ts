import Logo from '../assets/svg/Logo.svg';
import RoundedDiagram from '../assets/svg/RegistrationVector.svg';
import GoogleImage from '../assets/svg/Google.svg';
import LoginImage from '../assets/svg/LoginVector.svg';
import ThinkingVector from '../assets/svg/ThinkingVector.svg';
import BackspaceIcon from '../assets/svg/KeyboardBackspace.svg';
import HomeIcon from '../assets/svg/Home.svg';
import BlueHome from '../assets/svg/BlueHome.svg';
import ProfileIcon from '../assets/svg/Profile.svg';
import BlueProfileIcon from '../assets/svg/BlueProfile.svg';
import PlusCircleIcon from '../assets/svg/PlusCircle.svg';
import BlueCircleIcon from '../assets/svg/BluePlusCircle.svg';
import Reports from '../assets/svg/HandsHelping.svg';
import BlueReports from '../assets/svg/BLueHandsHelping.svg';
import NewsIcon from '../assets/svg/NewsIcon.svg';
import BlueNewsIcon from '../assets/svg/BlueNewsIcon.svg';
import SearchIcon from '../assets/svg/Search.svg';
import Calender from '../assets/svg/Calendar.svg';
import Uploader from '../assets/svg/Uploader.svg';
import Logout from '../assets/svg/Logout.svg';
import CrossIcon from '../assets/svg/CrossIcon.svg';
import EditIcon from '../assets/svg/EditIcon.svg';
import FloatIcon from '../assets/svg/FloatingIcon.svg';
import Gradient from '../assets/svg/Gradient.svg';
import MailIcon from '../assets/images/MailIcon.png';
import HeroImage from '../assets/images/HeroImage.png';
import MissingPerson from '../assets/images/MissingPerson.png';
import { Dimensions } from 'react-native';
// import FamiljenGrotest from '../assets/fonts/FamiljenGrotest.ttf';

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
  SUBMIT_BUTTON_TEXT: '#FAFAFC',
  BACKGROUND_COLOR: 'rgba(0, 0, 0, 0.67)',
};

export const Units = {
  WINDOW_WIDTH: windowWidth,
  WINDOW_HEIGHT: windowHeight,
};

export const Images = {
  GOOGLE_IMAGE: GoogleImage,
  LOGO: Logo,
  VECTOR_ROUNDED_DIAGRAM: RoundedDiagram,
  MAIL_ICON: MailIcon,
  HERO_IMAGE: HeroImage,
  MISSING_PERSON: MissingPerson,
  VECTOR_DIAGRAM_LOGIN: LoginImage,
  THINKING_VECTOR: ThinkingVector,
  BACKSPACE_ICON: BackspaceIcon,
  HOME_ICON: HomeIcon,
  PROFILE_ICON: ProfileIcon,
  PLUS_CIRCLE_ICON: PlusCircleIcon,
  REPORTS_ICON: Reports,
  SEARCH_ICON: SearchIcon,
  CALENDER_ICON: Calender,
  UPLOADER_IMAGE: Uploader,
  BLUE_HOME: BlueHome,
  BLUE_PLUS_CIRCLE: BlueCircleIcon,
  BLUE_PROFILE: BlueProfileIcon,
  BLUE_REPORTS: BlueReports,
  NEWS_ICON: NewsIcon,
  BLUE_NEWS: BlueNewsIcon,
  LOGOUT_ICON: Logout,
  CROSS_ICON: CrossIcon,
  EDIT_ICON: EditIcon,
  FLOAT_ICON: FloatIcon,
  GRADIENT_IMAGE: Gradient,
};
export const Fonts = {
  PRIMARY_FONT: 'FamiljenGrotest',
  SECONDARY_FONT: 'Inter',
};
