import {Titulo as EstiloDoTitulo} from './styles';

export type Props = {
  children:string;
  fontSize: string
}

  const Titulo = (props:Props) => (
    <EstiloDoTitulo fontSize={props.fontSize}>{props.children}</EstiloDoTitulo>
  )

export default Titulo;
