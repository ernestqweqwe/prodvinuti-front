import { useTranslation } from 'react-i18next';

const AbouPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('about-page')}
            {t('test')}
        </div>
    );
};

export default AbouPage;
