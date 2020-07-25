import {css} from 'styled-components'

const styles = css`
  margin: 25px 25px 0px 0px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  width: 140px;
  height: 40px;
  background: linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
  border: 0px;
  border-radius: 5px;

  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.15),
     rgba(255, 255, 255, 0.15)), linear-gradient(180deg, #45A6FF 0%,
     #0055FB 100%), #C4C4C4;
  }

  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15),
     rgba(0, 0, 0, 0.15)),
      linear-gradient(180deg, #45A6FF 0%, #0055FB 100%),
       #C4C4C4;
    border: 0px;
    overline: 0px;
  }
`
export default styles