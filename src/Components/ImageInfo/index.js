import React from 'react';
import { View, Text, Image } from 'react-native';
import ImageAvatar from '../../assets/avatar.png';
import { styles } from './styles';

const AVATAR_DEFAULT = Image.resolveAssetSource(ImageAvatar).uri;

const SIZES = {
  SMALL: {
    avatarSize: 28,
  },
  NORMAL: {
    avatarSize: 90,
  },
  REGULAR: {
    avatarSize: 170,
  },
  MEDIUM: {
    avatarSize: 140,
  },
};

const ImageInfo = ({ imageUri, sizes = 'NORMAL' }) => {
  const { avatarSize } = SIZES[sizes];

  return (
    <View style={styles.content}>
      <Image
        source={{ uri: imageUri || AVATAR_DEFAULT }}
        style={[
          styles.userphoto,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </View>
  );
};
export default ImageInfo;
