import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import SideMenu from '@app/components/SideMenu';
import HomeContent from '@app/components/HomeContent';
import HistoryComponent from '@app/components/History';
import {IState} from '@app/types';

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
  showHistory: boolean;
  shortenLinkState: IState;
  handleDeleteLink: (code: string) => void;
};

const Home = ({
  formData,
  errors,
  onChangeText,
  handleShortenLink,
  showHistory,
  shortenLinkState,
  handleDeleteLink,
}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {!showHistory ? (
        <HomeContent />
      ) : (
        <HistoryComponent
          shortenLinkState={shortenLinkState}
          handleDeleteLink={handleDeleteLink}
        />
      )}
      <SideMenu
        formData={formData}
        errors={errors}
        onChangeText={onChangeText}
        handleShortenLink={handleShortenLink}
        shortenLinkState={shortenLinkState}
      />
    </SafeAreaView>
  );
};

export default Home;
