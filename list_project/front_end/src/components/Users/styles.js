import styled from "styled-components";

export const BoxContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width:1060px;
    margin: auto;
`;

export const Box = styled.div`
    background-color: #2b2b2b;
    color:#fff;
    border-radius:16px;
    min-width: 300px;
    min-height: 100px;
    margin: 5px;
    padding: 1rem 1.5rem;
    box-shadow: 12px 15px 20px rgba(16, 16, 16, 0.01);
    p{
        display:flex;
        align-items:center;
        padding: 6px;
        svg{
            margin-right:5px;
        }
    }
    span{
    
    }
    .box_footer{
        border-top: 1px dotted #444343;
        padding: 5px 0 0;
        text-align: right;
        width: 100%;
        span{
            cursor: pointer;
        }
    }
`;
export const Modal = styled.div`

`;