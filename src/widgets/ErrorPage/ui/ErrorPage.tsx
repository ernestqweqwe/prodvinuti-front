import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>{t('An unexpected error occurred')}</p>
            <Button onClick={reloadPage}>{t('Refresh page')}</Button>
        </div>
    );
};
