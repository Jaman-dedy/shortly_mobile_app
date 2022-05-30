import React from 'react';
import {ScrollView} from 'react-native';

import {Box, Text} from '@app/assets/style/theme';

import BoxComponent from '@app/components/Box';
import {IState} from '@app/types';
import PlaceHolder from '@app/components/common/PlaceHolder';
import EmptyContent from '@app/components/common/EmptyContent';

type Props = {
  shortenLinkState: IState;
  handleDeleteLink: (code: string) => void;
};

const History = ({shortenLinkState, handleDeleteLink}: Props) => {
  return (
    <Box flex={3} backgroundColor="offBackground" marginTop="md">
      <Text variant="paragraph">Your Link History</Text>
      <ScrollView>
        <Box marginTop="md">
          {shortenLinkState?.loading ? (
            <>
              <PlaceHolder />
              <PlaceHolder />
            </>
          ) : shortenLinkState?.result?.length ? (
            shortenLinkState?.result.map(
              (link: Record<string, string>, index: number) => (
                <BoxComponent
                  key={index}
                  link={link}
                  handleDeleteLink={handleDeleteLink}
                />
              ),
            )
          ) : (
            <>
              <EmptyContent />
            </>
          )}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default History;
