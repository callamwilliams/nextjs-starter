import styled from 'styled-components';

export const Wrapper = styled.div<{ maxWidth: string }>`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100vw;
    max-height: 50vh;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background: ${({ theme }) => theme.colors.neutral.white};
    z-index: 5;

    @media (min-width: ${({ theme }) => theme.viewport.md}) {
        top: 50%;
        bottom: auto;
        left: 50%;
        max-width: ${({ maxWidth }) => maxWidth || 'calc(100vw - 7.5rem)'};
        max-height: calc(80vh - 5rem);
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        transform: translate(-50%, -50%);
    }
`;

export const Close = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1.5625rem 1.5rem 1.5625rem 0;

    svg {
        margin-left: auto;
        width: 0.8438rem;
        height: 0.8438rem;

        &:hover {
            cursor: pointer;
        }
    }
`;
