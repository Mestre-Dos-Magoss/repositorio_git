import styled from 'styled-components';

type ButtonProps = {
  principal?:boolean;
  fontSize?:string;
}

export const Botao = styled.button<ButtonProps>`
  background-color:${props => props.principal ? 'green' : 'red'};
  color:white;
  font-size:${props => props.fontSize || '18px'};

  span{
    color:red;
    font-size:35px;
  }
`;

export const BotaoCancelar = styled(Botao)`
  background-color:blue;
  color:red;
`;
