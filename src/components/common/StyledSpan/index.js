import styled, { css } from "styled-components";

export const StyledSpan = styled.span`
    justify-self: center;
    align-self: center;

    ${({ invoiceId }) => invoiceId && css`
        color: ${({ theme }) => theme.font.color.highlighted};
        font-weight: ${({ theme }) => theme.font.weights.bold};
    `}

    ${({ amount }) => amount && css`
        color: ${({ theme }) => theme.font.color.highlighted};
        font-weight: ${({ theme }) => theme.font.weights.bold};
        font-size: ${({ theme }) => theme.font.size.keyInfo}px;
    `}

    ${({ status }) => status && css`
        padding: 12px 20px;
        background-color: ${({ theme }) => theme.colors.background.status[status]};
        color: ${({ theme }) => theme.font.color.status[status]};
        font-weight: ${({ theme }) => theme.font.weights.bold};
    `}
`;