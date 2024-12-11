function App() {
  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed"
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed"
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed"
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed"
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog"
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress"
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog"
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress"
    }
  ];

  // Tasks non completati
  const notCompletedTasks = tasks.filter((curTask) => {
    return curTask.state === "backlog" || curTask.state === "in_progress";
  })

  const notCompletedTasksList = () => {
    return notCompletedTasks.map((curTask) => 
    <ul key={curTask.id}>
      <li>{curTask.title} <button className={`${curTask.state}`}>{curTask.state}</button></li>
      <li>Priority : {curTask.priority}</li>
      <li>Est. time {curTask.estimatedTime}</li>
    </ul>)
  }

  // Tasks completati
  const completedTasks = tasks.filter((curTask) => {
    return curTask.state === "completed";
  })

  const completedTasksList = () => {
    return completedTasks.map((curTask) => 
    <ul key={curTask.id}>
      <li>{curTask.title} <button className={`${curTask.state}`}>{curTask.state}</button></li>
      <li>Priority : {curTask.priority}</li>
      <li>Est. time {curTask.estimatedTime}</li>
    </ul>)
  }

  return (
    <>
    <header>
      <h1>Task Manager</h1>
    </header>
    <h3>Current Tasks ({notCompletedTasks.length})</h3>
    <div>{notCompletedTasksList()}</div>
    <hr/>
    <h3>Completed Tasks ({completedTasks.length})</h3>
    <div>{completedTasksList()}</div>
    </>
  )
}

export default App
