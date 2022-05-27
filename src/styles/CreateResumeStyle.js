import styled from "styled-components";

export const StyledCreateResume = styled.div`
  height: 300px;

  h1 {
    color: var(--h1-color);
    margin-bottom: 20px;
    font-size: var(--text-3);
  }
`;

export const CreateNew = styled.div`
  border: 1px solid var(--primary-color);
  width: 166px;
  height: 234px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MyResume = styled.div`
  margin-top: 40px;
  h1 {
    color: var(--h1-color);
    font-size: var(--text-3);
    margin-bottom: 20px;
  }
`;

export const EditResume = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
`;

export const EditResumeOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h4{
      font-weight: 500;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: baseline;
  height: 40px;
  img {
    margin-right: 10px;
  }
`;

export const DownloadResume = styled(Option)`
  color: var(--primary-color);
`;
