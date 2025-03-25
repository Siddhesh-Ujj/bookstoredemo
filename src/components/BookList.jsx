import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchBooks } from "../services/api";
import styled from "styled-components";
import Back from "../assets/Back.svg";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import BookCard from "./BookCard";
import { primaryColor } from "../styles";

const BookListContainer = styled.div`
  padding: 20px;
`;

const CategoryTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: ${primaryColor};
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
`;

const NoBooksMessage = styled.p`
  font-size: 18px;
  color: #888;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const BackButton = styled.img`
  cursor: pointer;

  width: 24px;
  height: 24px;
`;

const BookList = () => {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get("search") || "";

  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState(initialSearch);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setBooks([]);
    setPage(1);
    setHasMore(true);
    fetchData();
  }, [category, search]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchBooks(category, search, page);
      setBooks((prevBooks) => [...prevBooks, ...data.results]);
      setHasMore(!!data.next);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <BookListContainer>
      <CategoryTitle>
        <BackButton src={Back} alt="Back" onClick={handleGoBack} /> {category}
      </CategoryTitle>
      <SearchBar
        onSearch={handleSearch}
        setPage={setPage}
        initialSearch={initialSearch}
      />
      {!loading && books.length === 0 ? (
        <NoBooksMessage>No books found.</NoBooksMessage>
      ) : (
        <InfiniteScroll
          dataLength={books?.length || 0}
          next={fetchData}
          hasMore={hasMore}
          loader={<Loading />}
        >
          <BookGrid>
            {books &&
              books?.map((book) => <BookCard key={book.id} book={book} />)}
          </BookGrid>
        </InfiniteScroll>
      )}
    </BookListContainer>
  );
};

export default BookList;
