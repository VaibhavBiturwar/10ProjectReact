import styled from "styled-components";

const OPTIONS = [1, 2, 3, 4, 5, 6];

export default function NumberSelector({ active, setActive, error }) {
  return (
    <SelectorCtr>
      <p>{error}</p>
      <div className="boxCtr">
        {OPTIONS.map((val, i) => (
          <Box
            onClick={() => setActive(val)}
            isSelected={active - 1 == i}
            key={i}
          >
            {val}
          </Box>
        ))}
      </div>
      <h1>Selected Number</h1>
    </SelectorCtr>
  );
}

const SelectorCtr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1 {
    color: black;
    font-size: 24px;
    font-weight: bold;
  }
  p {
    color: #ff0c0c;
    font-size: 24px;
    justify-content: flex-end;
    margin: 0px;
    margin-bottom: 5px;
  }
  .boxCtr {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`;

const Box = styled.button`
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  border: 1px solid grey;
  font-size: 24px;
  font-weight: bold;
  padding: 18px;
  aspect-ratio: 2/1;
  cursor: pointer;
`;
