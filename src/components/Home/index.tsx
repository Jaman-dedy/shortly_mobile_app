import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import SideMenu from '@app/components/SideMenu';
import HomeContent from '@app/components/HomeContent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

type Props = {
  formData: Record<string, string>;
  errors: Record<string, string>;
  onChangeText: (args: {name: string; value: string}) => void;
  handleShortenLink: () => void;
};

const Home = ({formData, errors, onChangeText, handleShortenLink}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeContent />
      <SideMenu
        formData={formData}
        errors={errors}
        onChangeText={onChangeText}
        handleShortenLink={handleShortenLink}
      />
    </SafeAreaView>
  );
};

export default Home;
