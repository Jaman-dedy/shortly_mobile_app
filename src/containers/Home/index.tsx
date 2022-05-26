import React, {useState} from 'react';
import HomeComponent from '@app/components/Home';

const Home = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    link: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    message: '',
  });

  const onChangeText = ({name, value}: {name: string; value: string}): void => {
    setFormData({...formData, [name]: value});
    setErrors({...errors, [name]: ''});
  };

  const handleShortenLink = () => {
    if (!formData.link) {
      setErrors({...errors, message: 'Please add a link here'});
    }
    // setErrors({...errors, message: ''});
  };
  return (
    <HomeComponent
      onChangeText={onChangeText}
      handleShortenLink={handleShortenLink}
      formData={formData}
      errors={errors}
    />
  );
};

export default Home;
