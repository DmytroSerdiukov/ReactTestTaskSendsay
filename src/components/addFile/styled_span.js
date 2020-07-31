import React from 'react'
import styled from 'styled-components'
import styles from './styles'
import {css} from 'styled-components'

const StyledSpan = styled.input`
    ${styles}
`

const StyledFileList = css`
    display: flex;
    flex-direction: row;
`

export const StyledDiv = styled.div`
    ${StyledFileList}
`




export default StyledSpan