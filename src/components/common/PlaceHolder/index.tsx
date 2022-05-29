import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const PlaceHolder = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={320} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={320}
            height={30}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default PlaceHolder;
