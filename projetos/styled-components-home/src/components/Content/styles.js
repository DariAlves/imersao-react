import styled from 'styled-components';

export const ContentBox = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: wrap;
    flex-wrap: wrap;
    height: 100%;
    margin: 0 auto;
`;

export const ContentItem = styled.p`
    color: #000;
    background: #c0c0c0;
    text-align: justify;
    font-family: 'Arial';
    width: 400px;
    padding: 20px;
    margin: 40px;
    box-shadow: 1px 1px 5px #000;
    border-radius: 5px;
`;