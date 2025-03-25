import React from "react";
import styled from "styled-components";
import { grey4 } from "../styles";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  cursor: pointer;
  overflow: hidden;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    height: auto;
  }
`;

const Title = styled.h3`
  font-size: 10px;
  font-weight: bold;
  color: ${grey4};
  margin-bottom: 1px;
  font-family: "Montserrat", sans-serif;
`;

const Author = styled.p`
  font-size: 10px;
  color: ${grey4};
  margin: 0;
  font-family: "Montserrat", sans-serif;
`;

const BookImage = styled.img`
  width: 100%;
  height: 25vh;
  border-radius: 8px 8px 0 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);
  object-fit: cover;
  @media (min-width: 768px) {
    height: 35vh;
  }
`;

const BookCard = ({ book }) => {
  const openBook = () => {
    const htmlLink = book.formats["text/html"];
    const pdfLink = book.formats["application/pdf"];
    const textLink = book.formats["text/plain"];

    if (htmlLink) window.open(htmlLink, "_blank");
    else if (pdfLink) window.open(pdfLink, "_blank");
    else if (textLink) window.open(textLink, "_blank");
    else alert("No viewable version available");
  };

  const truncateTitle = (title, wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  return (
    <Card onClick={openBook}>
      {book.formats["image/jpeg"] && (
        <BookImage src={book.formats["image/jpeg"]} alt={book.title} />
      )}
      <Title>
        {book.title.length > 30
          ? `${truncateTitle(book.title, 5)}`
          : book.title}
      </Title>
      <Author>
        {book.authors && book.authors[0] ? book.authors[0].name : "Unknown"}
      </Author>
    </Card>
  );
};

export default BookCard;
