import { useTranslation } from 'react-i18next';

const DashBoard = () => {
  const { t } = useTranslation()

  return <div>{ t('dashboard.title') }</div>;
};

export default DashBoard;
