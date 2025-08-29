import styles from "./page.module.css";

export default async function Home() {
  const res = await fetch("http://localhost:3001/api/test", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
          <li>{JSON.stringify(data.data)}</li>
        </ul>
      </main>
    </div>
  )
}


