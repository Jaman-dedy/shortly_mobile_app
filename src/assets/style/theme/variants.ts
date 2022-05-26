import {s} from 'react-native-size-matters';

const textFamily = {
  fontFamily: 'Poppins-Medium',
};

export const buttonVariant = {
  paddingVertical: s(8),
  paddingHorizontal: s(16),
  borderRadius: s(4),
  width: s(280),
};

export const inputVariant = {
  paddingVertical: s(8),
  paddingHorizontal: s(16),
  borderRadius: s(4),
  width: s(280),
  borderWidth: 1,
  height: s(45),
  fontSize: 18,
};

export const textVariants = {
  defaults: {
    color: 'text',
  },
  header: {
    ...textFamily,
    fontSize: 34,
    color: 'text',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeader: {
    ...textFamily,
    fontSize: 22,
    color: 'text',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paragraph: {
    ...textFamily,
    fontSize: 18,
    color: 'text',
    textAlign: 'center',
  },
  buttonText: {
    ...textFamily,
    fontSize: 22,
    color: 'mainBackground',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};
