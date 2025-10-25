import styled from 'styled-components';
import {Props} from './index'

export const Titulo = styled.h3<Props>`
  font-size:${(props) => props.fontSize || '14px'};
  font-weight:bold;
  color:#232a25;
  margin-bottom:16px;
`;
