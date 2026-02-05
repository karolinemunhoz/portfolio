import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 1000;
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`
