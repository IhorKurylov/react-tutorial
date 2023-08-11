import styles from './MainComponent.module.css'

const MainComponent = (props) => {
  console.log(props);
  const mainTitle = 'Main Component Title';
  return (
    <div className={styles.wrapper}>
  <h1>{props.title}</h1>
  <h4>{props.title}</h4>
  <div className={styles.link}>Main Component</div>
    </div>
  );
};

export default MainComponent;
