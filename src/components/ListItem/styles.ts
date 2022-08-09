import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}
export const Container = styled.div(({ done }: ContainerProps)=>(`
display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px 25px 25px 10px;
    margin-bottom: 10px;
    align-items: center;
    min-width: 50vh;
    flex: 1;

    input {
        width: 25px;
        height: 25px;
        margin-right: 15px;
    }

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`));

export const GlobalContainer = styled.div`
    display: flex;
`;

export const DeleteButton = styled.div`
    color: #FFF;
    text-align: center;
    background-color: #bf3f52;
    width: 100px;
    height: 50px;
    border-radius: 20px;
    line-height: 50px;
    margin-left: 10px;
`;