/* eslint-disable react/react-in-jsx-scope */
import { Images } from '../constants/constants';
import Home from '../screens/home/Home';
import Missing from '../screens/missing/Missing';
import Upload from '../screens/upload/Upload';
import EditProfile from '../screens/profile/Profile';
import News from '../screens/news/News';
import { ScreenConfig } from '../types/types';

const screenConfigs: ScreenConfig[] = [
  {
    name: 'Home',
    component: Home,
    title: 'Home',
    icon: {
      focused: <Images.BLUE_HOME height={25} width={25} />,
      unfocused: <Images.HOME_ICON height={25} width={25} />,
    },
    hideHeader: true,
  },
  {
    name: 'Missing',
    component: Missing,
    title: 'Reports',
    headerTitle: 'All Missing Persons',
    icon: {
      focused: <Images.BLUE_REPORTS height={25} width={25} />,
      unfocused: <Images.REPORTS_ICON height={25} width={25} />,
    },
    hideHeader: true,
  },
  {
    name: 'Upload',
    component: Upload,
    title: 'Upload',
    headerTitle: 'Missing Person Detail',
    icon: {
      focused: <Images.BLUE_PLUS_CIRCLE height={25} width={25} />,
      unfocused: <Images.PLUS_CIRCLE_ICON height={25} width={25} />,
    },
  },
  {
    name: 'News',
    component: News,
    title: 'News',
    headerTitle: 'Reports',
    icon: {
      focused: <Images.BLUE_NEWS height={25} width={25} />,
      unfocused: <Images.NEWS_ICON height={25} width={25} />,
    },
  },
  {
    name: 'Profile',
    component: EditProfile,
    title: 'Profile',
    icon: {
      focused: <Images.BLUE_PROFILE height={25} width={25} />,
      unfocused: <Images.PROFILE_ICON height={25} width={25} />,
    },
    hideHeader: true,
    tabBarVisible: ({ route }) => {
      const routeName = route.name;
      return routeName !== 'Profile';
    },
  },
];

export default screenConfigs;
