import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor, grey1, grey4 } from "../styles";
import ADVENTURE from "../assets/Adventure.svg";
import FICTION from "../assets/Fiction.svg";
import DRAMA from "../assets/Drama.svg";
import HUMOUR from "../assets/Humour.svg";
import POLITICS from "../assets/Politics.svg";
import PHILOSOPHY from "../assets/Philosophy.svg";
import HISTORY from "../assets/History.svg";
import Next from "../assets/Next.svg";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${grey1};
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23E0E0E0' fill-opacity='0.4'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E");
  padding: 10px 20px;
`;

const Title = styled.h1`
  margin: 30px 20px 1px 20px;
  font-size: 3.5rem;
  font-weight: 600;
  color: ${primaryColor};
  text-align: start;
  font-family @media (min-width: 600px) {
    // Desktop/Tablet styles
    font-size: 4rem;
  }
`;

const Description = styled.p`
  margin: 1px 10px 10px 20px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${grey4};
  // text-align: center;
  @media (min-width: 600px) {
    margin: 1px 250px 10px 20px;
  }
`;

const GenreGrid = styled.div`
  display: flex;
  flex-direction: column; // Default to single column for mobile
  width: 100%;
  max-width: 400px;
  gap: 15px;
  align-items: center;
  @media (min-width: 600px) {
    // Desktop/Tablet styles
    flex-direction: row;
    flex-wrap: wrap;
    // justify-content: center;
    max-width: 100rem;
    // grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
`;

const GenreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start; // Align items to the start
  padding: 12px 20px;
  background: #fff; // Light background color
  border: none; // Remove the border
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: ${grey4};
  text-align: left;
  width: 18rem;
  box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5); // Add shadow
  position: relative; // Needed for absolute positioning of NextIcon
  overflow: hidden; // Hide any potential overflow

  &:hover {
    background-color: #e0e0e0; // Darken on hover
  }

  margin-bottom: 10px;
  height: 50px; // Fixed height for all buttons

  @media (min-width: 600px) {
    // Desktop/Tablet styles
    margin-bottom: 0;
    width: 35rem;
    height: 60px; // Fixed height for all buttons
  }
`;

const GenreIcon = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const NextIcon = styled.img`
  position: absolute; // Position the arrow absolutely
  right: 20px; // Position from the right
  top: 50%; // Center vertically
  transform: translateY(-50%); // Center vertically
  width: 20px;
  height: 20px;
`;

const HomePage = () => {
  const categories = [
    { name: "FICTION", icon: FICTION },
    { name: "DRAMA", icon: DRAMA },
    { name: "HUMOUR", icon: HUMOUR },
    { name: "POLITICS", icon: POLITICS },
    { name: "PHILOSOPHY", icon: PHILOSOPHY },
    { name: "HISTORY", icon: HISTORY },
    { name: "ADVENTURE", icon: ADVENTURE },
  ];

  return (
    <HomePageContainer>
      <Title>Gutenberg Project</Title>
      <Description>
        A social cataloging website that allows you to freely search its
        database of books, annotations, and reviews.
      </Description>
      <GenreGrid>
        {categories.map((category) => (
          <Link key={category.name} to={`/books/${category.name}`}>
            <GenreButton>
              <GenreIcon>
                <img
                  src={category.icon}
                  alt={category.name}
                  width="24"
                  height="24"
                />
              </GenreIcon>
              {category.name}
              <NextIcon src={Next} alt="Next" />
            </GenreButton>
          </Link>
        ))}
      </GenreGrid>
    </HomePageContainer>
  );
};

export default HomePage;
