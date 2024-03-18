import { SafeAreaView } from 'react-native';
import React from 'react';
// import ReportMissing from './src/screens/reportMissing/ReportMissing';
// import Home from './src/screens/home/Home';
// import Forgot from './src/screens/auth/forgot/Forgot';
// import Login from './src/screens/auth/login/Login';
import Registration from './src/screens/auth/registration/Registration';

const App: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView>
      {/* <Login /> */}
      <Registration />
      {/* <Forgot /> */}
      {/* <ReportMissing /> */}
      {/* <Home /> */}
    </SafeAreaView>
  );
};

export default App;
