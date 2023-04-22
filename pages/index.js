import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { USstates } from "../public/usStates";

export default function Home() {
  const [state, setState] = useState("New York");
  const [subject, setSubject] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();

    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/generate-safety", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state, subject }),
      });

      const data = await response.json();
      console.log(data);
      setResult(data.result.replaceAll("\n", "<br />"));
    } catch (e) {
      alert("Failed to generate results, Try later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>AI Safety Expert</title>
        <link rel="icon" href="/helmet.png" />
      </Head>

      <main className={styles.main}>
        <img src="/helmet.png" className={styles.icon} />
        <h3>Construction Safety Code finder</h3>
        <form onSubmit={onSubmit}>
          <label>STATE</label>
          <select
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}>
            {USstates.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <label>SUBJECT</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter a Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input type="submit" value="Find Safety Regulations" />
        </form>

        {loading && (
          <div>
            <h4>Looking for the best answer💡</h4>
            <span className={styles.loading}></span>
            {/* <img src="/loading.webp" className={styles.loading} /> */}
          </div>
        )}
        <div
          className={styles.result}
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </main>
    </div>
  );
}
// write a select tag with 52 united states as options using an iterator
