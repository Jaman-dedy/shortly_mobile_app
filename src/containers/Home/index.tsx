import React, {useState} from 'react';
import HomeComponent from '@app/components/Home';

const Home = ({}) => {
  const [formData, setFormData] = useState<Record<string, string | null>>({
    link: null,
  });

  const [showHistory, setShowHistory] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({
    message: '',
  });

  const onChangeText = ({name, value}: {name: string; value: string}): void => {
    setFormData({...formData, [name]: value});
    setErrors({...errors, message: ''});
  };

  const handleShortenLink = () => {
    if (!formData.link) {
      setErrors({...errors, message: 'Please add a link here'});
    }
    if (formData.link) {
      setShowHistory(true);
    }
  };
  return (
    <HomeComponent
      onChangeText={onChangeText}
      handleShortenLink={handleShortenLink}
      formData={formData}
      errors={errors}
      showHistory={showHistory}
    />
  );
};

export default Home;
