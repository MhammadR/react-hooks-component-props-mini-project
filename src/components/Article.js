import React from "react";

function Article({ title, minutes, date = "January 1, 1970", preview }) {
  const coffeeNumber = minutes < 30 ? (Math.ceil(minutes / 5) * 5) / 5 : 0;
  const bentoNumber = minutes >= 30 ? (Math.ceil(minutes / 10) * 10) / 10 : 0;

  return (
    <article>
      <h3>{title}</h3>
      <small>{`${date} • ${
        coffeeNumber ? "☕️".repeat(coffeeNumber) : "🍱".repeat(bentoNumber)
      } ${minutes} min read`}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
