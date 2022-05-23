import {moderateScale} from 'react-native-size-matters';

const fontSize = 17;
const textFamily = {
  fontFamily: 'Poppins-Regular',
};

export const textVariants = {
  header: {
    ...textFamily,
    fontSize: moderateScale(fontSize),
    lineHeight: 24,
    color: 'mainForeground',
  },
  subHeader: {
    ...textFamily,
    fontSize: moderateScale(fontSize),
    lineHeight: 24,
    color: 'mainForeground',
  },
  paragraph: {
    ...textFamily,
    fontSize: moderateScale(fontSize),
    lineHeight: 24,
    color: 'mainForeground',
  },
};
