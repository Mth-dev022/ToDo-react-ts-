import React from 'react'

// INTERFACES
import { ITask } from '../interfaces/Task'

// STYLES
import styles from "./taskList.module.css"

interface Props {

  taskList: ITask[],
  handleDelete(id: number): void,
  handleEdit(task: ITask): void
}


const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {

  return (
    <>
      {taskList.length > 0 ? (

        taskList.map((task) => (

          <div className={styles.task} key={task.id}>

            <div className={styles.details}>

              <h4>{task.title}</h4>
              <p>Dificuldade{task.difficulty}</p>

            </div>

            <div className={styles.actions}>

              <i onClick={() => { handleEdit(task) }} className="bi bi-pencil"></i>
              <i onClick={() => {
                handleDelete(task.id)
              }}
                className="bi bi-trash"></i>

            </div>

          </div>

        ))) :

        (<p>Não tem tarefas cadastradas</p>

        )}

    </>
  )
}

export default TaskList