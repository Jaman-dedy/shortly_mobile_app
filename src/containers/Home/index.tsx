import React, {useState} from 'react';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';

import {InitialState} from '@app/types';
import HomeComponent from '@app/components/Home';
import {shortenLink as shortenLinkAction} from '@app/redux/actions/link/shortenLink';
import {removeLink as removeLinkAction} from '@app/redux/actions/link/removeLink';

const typedUseSelectorHook: TypedUseSelectorHook<InitialState> = useSelector;

const Home = ({}) => {
  const dispatch = useDispatch();

  const {
    link: {shortenLink: shortenLinkState},
  } = typedUseSelectorHook(({link}) => ({link}));

  const [formData, setFormData] = useState<Record<string, string>>({
    link: '',
  });

  const [showHistory, setShowHistory] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({
    message: '',
  });

  const onChangeText = ({name, value}: {name: string; value: string}): void => {
    setFormData({...formData, [name]: value});
    setErrors({...errors, message: ''});
  };

  const isValidURL = (url: string | null) => {
    var res = url?.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    );
    return res !== null;
  };

  const validate = () => {
    if (!formData.link) {
      setErrors({...errors, message: 'Please add a link here'});
      return false;
    }
    const validateUrl = isValidURL(formData?.link);
    if (!validateUrl) {
      setErrors({...errors, message: 'Please enter a valid url'});
      return false;
    }
    return true;
  };

  const handleShortenLink = () => {
    if (validate()) {
      const urlLink = formData?.link;
      setShowHistory(true);
      shortenLinkAction(urlLink)(dispatch);
    }
  };
  const handleDeleteLink = (code: string) => {
    removeLinkAction(code)(dispatch);
  };

  return (
    <HomeComponent
      onChangeText={onChangeText}
      handleShortenLink={handleShortenLink}
      formData={formData}
      errors={errors}
      showHistory={showHistory}
      shortenLinkState={shortenLinkState}
      handleDeleteLink={handleDeleteLink}
    />
  );
};

export default Home;
