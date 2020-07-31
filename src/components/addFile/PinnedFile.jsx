import React from 'react'
import { StyledListItem } from './styled_span'

const PinnedFile = ({number}) => {
    return <StyledListItem>
        Pinned File {number}
    </StyledListItem>
}

export default PinnedFile