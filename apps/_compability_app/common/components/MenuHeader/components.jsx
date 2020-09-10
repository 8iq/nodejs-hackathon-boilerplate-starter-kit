// TODO: rework this awful stylisation of menu header (write custom header component);
import styled from "@emotion/styled";

export const IconContainer = styled.div`
    position: relative;
    padding: 0 12px;
    
    ${props => props.active && `
        &:after {
            content: "";
            display: block;
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #fff;
            bottom: 10px;
            margin-left: -3px;
            left: 50%;
        };
    `}
`;

export const StyledMenuItemWrapper = styled.div`
    cursor: pointer;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }
    
    &:active {
        background-color: #095975;
    }
`;
