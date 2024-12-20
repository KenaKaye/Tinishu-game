import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./MainContentStyles.module.css";
import Podium from "../../Components/Podium/Podium.jsx";
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch.jsx";

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("Weekly");
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { rank: 1, number: "John Doe", coins: 10000 },
      { rank: 2, number: "Bob Smith", coins: 9000 },
      { rank: 3, number: "Jane Doe", coins: 8000 },
      { rank: 4, number: "Abebe", coins: 7000 },
    ]);
  }, []);

  return (
    <main className={`${styles.mainContent}`}>
      <ThemeSwitch />
      <header className={`${styles.title}`}>
        <h1>
          <span className={`${styles.Leaderboard}`}>{t("Leaderboard")}</span>
        </h1>
      </header>
      <div className={`${styles.tabs}`}>
        <button
          className={activeTab === "Monthly" ? styles.activeTab : ""}
          onClick={() => setActiveTab("Monthly")}
        >
          {t("Monthly")}
        </button>
        <button
          className={activeTab === "Weekly" ? styles.activeTab : ""}
          onClick={() => setActiveTab("Weekly")}
        >
          {t("Weekly")}
        </button>
        <button
          className={activeTab === "AllTime" ? styles.activeTab : ""}
          onClick={() => setActiveTab("AllTime")}
        >
          {t("AllTime")}
        </button>
      </div>

      <section className={`${styles.podium}`}>
        {users.map((user) => (
          <Podium
            key={user.number}
            placement={user.rank}
            number={user.number}
            coins={user.coins}
          />
        ))}
      </section>
    </main>
  );
};

export default Leaderboard;

/* 
  const [ranking, setRanking] = useState([]);
  const [asc, setAsc] = useState(false);
  const [alph, setAlph] = useState(false);
  const [page, setPage] = useState(1);
  const [pageMax, setPageMax] = useState(1);

  useEffect(() => {
    const sortedUsers = [...users].sort(compareScore).reverse();
    sortedUsers.forEach((user, index) => {
      user.rank = index + 1;
      user.page = Math.ceil((index + 1) / paginate);
    });
    setRanking(sortedUsers);
    setPageMax(sortedUsers[sortedUsers.length - 1]?.page || 1);
  }, [users, paginate]);

  const compareScore = (a, b) => a.score - b.score;
  const compareName = (a, b) => a.name.localeCompare(b.name);

  const sortUsersByScore = () => {
    const sortedRanking = [...ranking].sort(compareScore);
    if (!asc) sortedRanking.reverse();
    sortedRanking.forEach(
      (user, index) => (user.page = Math.ceil((index + 1) / paginate))
    );
    setRanking(sortedRanking);
    setAsc(!asc);
    setAlph(false);
  };

  const sortUsersByName = () => {
    const sortedRanking = [...ranking].sort(compareName);
    if (!alph) sortedRanking.reverse();
    sortedRanking.forEach(
      (user, index) => (user.page = Math.ceil((index + 1) / paginate))
    );
    setRanking(sortedRanking);
    setAlph(!alph);
    setAsc(false);
  };

  const filterRank = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredRanking = users.filter((user) =>
      user.name.toLowerCase().startsWith(search)
    );
    filteredRanking.sort(compareScore).reverse();
    filteredRanking.forEach(
      (user, index) => (user.page = Math.ceil((index + 1) / paginate))
    );
    setRanking(filteredRanking);
    setPage(1);
    setPageMax(
      filteredRanking.length
        ? filteredRanking[filteredRanking.length - 1].page
        : 1
    );
  };

  const increasePage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, pageMax));
  };

  const decreasePage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <table id="lBoard">
        <thead>
          <tr>
            <td colSpan="3">
              <h1>Leaderboard</h1>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <form>
                Name:{" "}
                <input
                  type="search"
                  placeholder="Search"
                  onChange={filterRank}
                />
              </form>
            </td>
          </tr>
          <tr>
            <th className={`${styles.rankHeader}`} onClick={sortUsersByScore}>
              Rank
            </th>
            <th className={`${styles.rankHeader}`} onClick={sortUsersByName}>
              Name
            </th>
            <th className={`${styles.rankHeader}`} onClick={sortUsersByScore}>
              Score
            </th>
          </tr>
        </thead>
        <tbody className={`${styles.ranking}`}>
          {ranking.map((user) =>
            user.page === page ? (
              <tr
                key={user.rank}
                className={`${styles.rankingRow} ${
                  user.rank === 1
                    ? styles.firstPlace
                    : user.rank === 2
                    ? styles.secondPlace
                    : user.rank === 3
                    ? styles.thirdPlace
                    : styles.normalRank
                }`}
              >
                <td className={`${styles.data}`}>{user.rank}</td>
                <td className={`${styles.data}`}>{user.name}</td>
                <td className={`${styles.data}`}>{user.score}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
      <div className={`${styles.pagination}`}>
        {page > 1 && <button onClick={decreasePage}>Prev</button>}
        <span>
          Page {page} of {pageMax}
        </span>
        {page < pageMax && <button onClick={increasePage}>Next</button>}
      </div>
    </div>
  );
 */
