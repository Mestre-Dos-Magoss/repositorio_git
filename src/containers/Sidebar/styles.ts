import styled from 'styled-components';
import {P} from '../../components/Paragráfo/styles'

export const ThemeButton = styled.button`
  padding:8px;
  border-radius:12px;
  font-size:10px;
  font-weight:bold;
  background-color:#282A35;
  color:#EEEEEE;
  cursor: pointer;
`;

export const Descricao = styled(P)`
  margin-top:24px;
  margin-bottom:40px;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  left:0;
  top:80px;
`;
