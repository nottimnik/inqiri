import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { categories } from "../../config/categories";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div>
      <br />

      <h3 style={{ textAlign: "center" }}>Explore</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <Card
            style={{
              padding: "20px",
              marginRight: "10px",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            <Logo>
              <img src={category.logo} width="90px" height="90px" />
            </Logo>
            <Link to={category.link}>
              <Title>{category.name}</Title>
            </Link>
            <Topic>{category.topics} Topics</Topic>
          </Card>
        ))}
      </div>
    </div>
  );
}

const Logo = styled.div`
  img {
    border-radius: 10px;
  }
`;

const Title = styled.h3`
  margin-top: 10px;
`;

const Topic = styled.p``;

const Description = styled.div``;
