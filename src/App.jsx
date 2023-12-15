import { useEffect, useState } from "react";

import "./App.css";
import Cards from "./components/Cards";
// import FormExample from "./components/FormExample";
import NavScrollExample from "./components/NavScrollExample";
import "./components/Cards.css";
import ReactPaginate from "react-paginate";

function App() {
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPAge] = useState(1);

  console.log(characters);

  async function fetchCharacters() {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      );
      const result = await response.json();
      setPageCount(result.info.pages);
      setCharacters(result.results);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const fetchData = async (currentPage) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data);
    setCurrentPAge(data.selected + 1);
    // const inputData = await fetchData(current);
    // setCharacters(inputData);
  };

  return (
    <>
      {/* <FormExample />; */}
      <NavScrollExample />
      <div className="cards-box">
        {characters.map((char) => (
          <Cards key={char.id} character={char} />
        ))}
      </div>

      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={pageCount}
        containerClassName={"pagination justify-content-around"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
      />
    </>
  );
}
export default App;
