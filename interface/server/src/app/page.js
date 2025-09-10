import styles from "./page.module.css";

export default async function Home() {

  let users = [];

  const data = await fetch("http://localhost:3000/api/user", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  for(let i=0; i<data.length; i++){
    users.push(data[i]);
  }
  console.log(users)
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>DB test:</h1>
          <ul>
            <li>{users}</li>
          </ul>
      </main>
    </div>
  )
}


