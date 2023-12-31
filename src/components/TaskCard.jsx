import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      style={{ backgroud: "black" }}
      onClick={() => {
        navigate(`/FrontTask/${task.id}`);
      }}
    >
      <h1 className="text-xl font-bold uppercase">{task.title}</h1>
      <p className="text-xl text-slate-400">{task.description}</p>
    </div>
  );
}

export default TaskCard;
