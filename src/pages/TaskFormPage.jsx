import { useForm } from "react-hook-form";
import { PostApi, deleteApi, updateApi, getOneApi } from "../api/getApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import styles from "../components/globalstyles.module.css";

function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateApi(params.id, data);
      toast.success("Task update!", {
        position: "bottom-right",
        style: {
          background: "#59981A",
          color: "#fff",
        },
      });
    } else {
      await PostApi(data);
      toast.success("Task create!", {
        position: "bottom-right",
        style: {
          background: "#59981A",
          color: "#fff",
        },
      });
    }
    navigate("/FrontTask/");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getOneApi(params.id);
        setValue("title", data.title);
        setValue("description", data.description);
      }
    }
    loadTask();
  }, []);

  return (
    <div className={styles.containerForm}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.title && <span>Title is required</span>}
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>Description is required</span>}
        <button className={styles.save}>SAVE</button>
      </form>
      {params.id && (
        <div className=" flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("are you sure?");
              if (accepted) {
                await deleteApi(params.id);
                toast.success("Task delete!", {
                  position: "bottom-right",
                  style: {
                    background: "#c32d1a",
                    color: "#fff",
                  },
                });
                navigate("/FrontTask/");
              }
            }}
          >
            DELETE
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskFormPage;
