import React from "react";
import styled from "styled-components";
import { categories } from "../../config/categories";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div>
      <br />

      <h3
        style={{ textAlign: "center", fontSize: "30px", marginBottom: "25px" }}
      >
        Explore
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <Box>
            <Link
              to={category.link}
              style={{
                margin: "0px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Header>
                <Logo>
                  <img src={category.logo} width="100px" height="100px" />
                </Logo>

                <Title>{category.name}</Title>
                <Topic>{category.topics} Topics</Topic>
              </Header>
            </Link>
            <hr
              style={{ height: "2px", marginTop: "0px", marginBottom: "10px" }}
            />
            <BoxContent>
              <Link
                to={`/wiki/${category.article1_link}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <span>
                  <img
                    src={category.article1_logo}
                    width="50px"
                    height="50px"
                  />{" "}
                  <h1>{category.article1_title}</h1>
                </span>
              </Link>
              <Link
                to={`/wiki/${category.article2_link}`}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <span>
                  <img
                    src={category.article2_logo}
                    width="50px"
                    height="50px"
                  />{" "}
                  <h1>{category.article2_title}</h1>
                </span>
              </Link>
            </BoxContent>
          </Box>
        ))}
      </div>
    </div>
  );
}

const Header = styled.div`
  padding: 10px;
  padding-bottom: 2px;
  text-decoration: none;

  &:hover {
    background-color: #f4f4f4;
    text-decoration: none;
    color: inherit;
  }
`;

const BoxContent = styled.div`
  padding: 10px;
  padding-top: 0px;
  padding-bottom: 0px;

  span {
    display: flex;
    margin-bottom: 10px;

    img {
      object-fit: cover;
      border-radius: 5px;
    }

    h1 {
      font-size: 20px;
      margin-left: 5px;
    }

    &:hover {
      background-color: #f4f4f4;
      border-radius: 5px;
    }
  }
`;

const Box = styled.div`
  background-color: white;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 5px;
  border: 2px solid #d3d3d3;
  margin-bottom: 20px;

  width: 40%;
`;

const Logo = styled.div`
  img {
    border-radius: 10px;
  }
`;

const Title = styled.h1`
  margin-top: 10px;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 0px;
`;

const Topic = styled.p`
  font-size: 18px;
`;

const Description = styled.div``;
