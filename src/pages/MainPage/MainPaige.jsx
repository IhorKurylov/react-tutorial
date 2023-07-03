import styles from './MainPaige.module.css';
import { AppRoutes } from '../../Routing/AppRoutes.js';
import { Link } from 'react-router-dom';


const MainPaige = () => {

  return (
    <div className={styles.wrapper}>
      <h1>Main page</h1>
      <h3><Link to={AppRoutes.LOGIN}>Login</Link> to proceed</h3>
    </div>
  );
};

export default MainPaige;
