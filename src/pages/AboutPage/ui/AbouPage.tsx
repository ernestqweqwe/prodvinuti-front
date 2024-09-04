import { useTranslation } from 'react-i18next';

const AbouPage = () => {
    const { t } = useTranslation('about');

    return <div>{t('about-page')}</div>;
};

export default AbouPage;
