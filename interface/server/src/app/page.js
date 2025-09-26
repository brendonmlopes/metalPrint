import styles from "./page.module.css";

export default async function Home() {
  function MakeList({elements}){
    let list = [];
    for (let i = 0; i < elements.length; i++) {
      list.push(<li key={i}>{elements[i]}</li>);
    }
    return list;
  }

  let users = [];

  const res = await fetch("http://localhost:3000/api/user", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const json = await res.json();
  const data = json.data;

  for (let i = 0; i < data.length; i++) {
    users.push(data[i].name);
  }

  console.log(data)
  console.log(users)
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>DB test:</h1>
          <ul>
            <MakeList elements={users}/>
          </ul>
      </main>
    </div>
  )
}


