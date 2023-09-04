import { useEffect, useState } from "react";
import { getApi } from "../api/getApi";
import TaskCard from "./TaskCard";
import styles from "./globalstyles.module.css";
function TaskList() {
  const [tasks, seTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getApi();
      seTasks(res.data);
    }
    loadTasks();
  }, []);
  return (
    <div className={styles.container}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
export default TaskList;
