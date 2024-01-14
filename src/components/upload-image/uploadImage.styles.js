import styled from "styled-components";

export const StyledUploadImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  border: 1px dashed #85858d;
  background: #f4f3ff;
  padding: 24px 0;
  width: 100%;
  gap: 16px;

  @media (min-width: 1287px) {
    padding: 48px 0;
    gap: 24px;
  }
`;

export const StyledUploadImageInput = styled.input`
  display: none;
`;
