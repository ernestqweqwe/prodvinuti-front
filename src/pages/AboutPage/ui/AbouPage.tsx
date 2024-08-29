import { useTranslation } from 'react-i18next';

const AbouPage = () => {
  const { t } = useTranslation('about');

  return <div>{t('About')}</div>;
};

export default AbouPage;
