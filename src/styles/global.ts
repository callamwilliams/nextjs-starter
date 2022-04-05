import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    margin: 0 auto;
    padding-top: 4rem;
`;

export const Page = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100vh;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
`;

export const VisuallyHidden = styled.span`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 0.0625rem;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 0.0625rem;
`;
