import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import History from './History';
import Workouts from './Workouts';

const HistoryRoute = () => <History></History>
const WorkoutRoute = () => <Workouts></Workouts>


const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'history', title: 'History', icon: 'queue-music' },
    { key: 'workout', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    history: HistoryRoute,
    workout: WorkoutRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;