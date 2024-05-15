import React from "react";
import styled from "styled-components";

const OPTIONS = [
  {
    id: 0,
    name: "All",
    type: "all",
  },
  {
    id: 1,
    name: "Breakfast",
    type: "breakfast",
  },
  {
    id: 2,
    name: "Lunch",
    type: "lunch",
  },
  {
    id: 3,
    name: "Dinner",
    type: "dinner",
  },
];

export default function Header({
  activeType,
  setActiveType,
  search,
  setSearch,
}) {
  return (
    <HeaderCtr>
      <DataCtr>
        <img src="/logo.png" />
        <input
          type="text"
          className="inputCtr"
          placeholder="Search Food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </DataCtr>
      <PillCtr>
        {OPTIONS.map((pill, i) => (
          <PillBtn
            isSelected={activeType == pill.type}
            onClick={() => setActiveType(pill.type)}
            key={pill.id}
          >
            {pill.name}
          </PillBtn>
        ))}
      </PillCtr>
    </HeaderCtr>
  );
}

const HeaderCtr = styled.div`
  background-color: #323334;
  height: 240px;
`;

const DataCtr = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  max-width: 1440px;
  margin: 0 auto;
  height: 50%;

  .inputCtr {
    border: 1px solid #ff4343;
    background-color: transparent;
    font-size: 16px;
    padding: 11px 15px;
    border-radius: 5px;
  }

  @media (0<width<600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PillCtr = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: end;
  height: 50%;
  padding-bottom: 30px;
  @media (0<width<600px) {
    margin: auto;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const PillBtn = styled.button`
  all: unset;
  background-color: ${({ isSelected }) => (isSelected ? "#d52323" : "#ff4343")};
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d52323;
  }
`;
