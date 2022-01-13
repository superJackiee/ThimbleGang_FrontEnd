import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    background: #161610;
    border-radius: 10px;
    justify-content: center;
    @font-face {
        font-family: PixelarRegular;
        src: url("../assets/fonts/PixelarRegularW01-Regular.ttf");
    }
    p {
        font-family: 'PixelarRegular';
    }

    pcolor {
        color: #3BF800;
        font-family: 'PixelarRegular';

    }
`;

export const StandardButton = (props = {
    label, size,
}) => {
    return (
        <ButtonContainer>
            <div>
                <pcolor style={{ fontSize: props.size }}>{props.label}</pcolor>
            </div>
        </ButtonContainer >
    );
};

export const ThimbleGang = () => {
    return (
        <ButtonContainer>
            <div style={{ display: "flex" }}>
                <pcolor style={{ fontSize: 57 }}>THIMBLE GANG</pcolor>
                <p style={{ fontSize: 57, margin: 0, color: "white" }}>&nbsp;BRAWLERS</p>
            </div>
        </ButtonContainer >
    );
}