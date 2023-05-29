import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';

function View() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const poemText = decodeURIComponent(searchParams.get("poem")).replace(/\\n/g, "\n");
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

  const author = searchParams.get("author");
  const title = searchParams.get("title");

  return (
    <div className="container-wrapper">
      <Navbar />
      <main>
        {poem || author ? (
          <div className=" flex-1 flex flex-col gap-4 mx-auto">
            {title && <h1 id="poem_title">{title}</h1>}
            <div>{poem}</div>
            <div id="poem_author">- {author}</div>
          </div>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

export default View;
