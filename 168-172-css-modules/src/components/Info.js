import "./Info.css"; //файлы со стилями css, которые подключаются таким образом, не привязываются только к этому компоненту, они действуют глобальном во всем приложении Реакт
import styles from "./Info.module.css";

console.log(styles);
// {
//  info: "Info_info__kFKjS"
//  myOtherButton: "Info_myOtherButton__t9zhn"
// }
function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the info component</h1>
      <button className="my-button">Click me</button>
      <h2>Heading in the info component</h2>
      <button className={styles.myOtherButton}>
        Button with local CSS styles
      </button>
    </div>
  );
}

export default Info;
