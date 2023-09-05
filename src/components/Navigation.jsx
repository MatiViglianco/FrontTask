import { Link } from "react-router-dom";
import styles from "./globalstyles.module.css";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <Link to="/FrontTask/">
        <h1 className="font-bold text-4xl ml-4 ">TASK APP</h1>
      </Link>
      <Link to="/FrontTask-create/">
        <button
          style={{
            background: "#59981a",
            color: "#fff",
          }}
          className="bg-indigo-500 px-10 py-2 rounded-lg  mr-4 text-xl"
        >
          CREATE TASK
        </button>
      </Link>
    </div>
  );
}

export default Navigation;
