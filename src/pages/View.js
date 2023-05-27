import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function View() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const poemText = decodeURIComponent(urlParams.get("poem")).replace(/\\n/g, "\n");
  const poemLines = poemText.split("\n");

  const poem = poemLines.length > 0 ? (
    <div className="poem">
      {poemLines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  ) : null;

  const author = urlParams.get("author");
  const title = urlParams.get("title");

  return (
    <div className="container-wrapper">
      <Navbar />
      <main>
        {poem || author ? (
          <div className=" flex-1 flex flex-col gap-4 mx-auto">
            {title && <h1 id="poem_title">{title}</h1>}
            {poem}
            {author && <div id="poem_author">- {author}</div>}
          </div>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}



export default View;
