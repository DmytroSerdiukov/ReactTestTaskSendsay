import React from 'react'
import styled from 'styled-components'
import styles from './styles'
import {css} from 'styled-components'

const StyledSpan = styled.input`
    ${styles}
`

const StyledList = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 750px;
`
export const StyledFileList = styled.div`
    ${StyledList}
`

export const ListItem = css`
    width: 365px;
    height: 50px;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 5px;
    background: #FFFFFF;
    margin-top: 5px;
    margin-right: 10px;

    &:last-child {
        margin-right: 0px;
    }
`

export const StyledListItem = styled.div`
    ${ListItem}
`

export default StyledSpan