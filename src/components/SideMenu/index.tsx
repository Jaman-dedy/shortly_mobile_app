import React from 'react';
import {StyleSheet} from 'react-native';

import {Box} from '@app/assets/style/theme';
import ShapeImg from '@app/assets/images/shape.svg';
import Button from '@app/components/common/Button';
import Input from '@app/components/common/Input';
import {IState} from '@app/types';

const styles = StyleSheet.create({
  shape: {
    alignSelf: 'flex-end',
  },
});

type Props = {
  formData: Record<string, string>;
  errors: Record<string, string>;
  onChangeText: (args: {name: string; value: string}) => void;
  handleShortenLink: () => void;
  shortenLinkState: IState;
};

const SideMenu = ({
  formData,
  errors,
  onChangeText,
  handleShortenLink,
  shortenLinkState,
}: Props) => {
  return (
    <Box flex={1} backgroundColor="sideBarBackground">
      <ShapeImg style={styles.shape} />
      <Box position="absolute" alignSelf="center" paddingTop="lg">
        <Input
          onChangeText={onChangeText}
          formData={formData}
          errors={errors}
          placeholder="Shorten a link here..."
        />
        <Button
          text="SHORTEN IT!"
          onPress={handleShortenLink}
          color="primary"
          loading={shortenLinkState?.loading}
        />
      </Box>
    </Box>
  );
};

export default SideMenu;
