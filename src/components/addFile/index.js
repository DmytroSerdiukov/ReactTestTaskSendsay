import React from 'react'
import StyledSpan from './styled_span.js'
import StyledFileList from './styled_span.js'
import { connect } from 'react-redux'
import {getPinnedFiles} from './../../reducer/selectors'
import {addFile} from './../../reducer/formHandleReducer'
import PinnedFile from './PinnedFile.jsx'
import {StyledDiv} from './styled_span'
const FileKeeper = props => {

    const print = e => {
        e.preventDefault()
        console.log(e)
        props.addFile(e)
    }

    return <div>
        <StyledDiv>{props.files.map((f, i) => <PinnedFile number={i} /> )}</StyledDiv>
        <label>
            Прикрепить файл
            <input type="file" onChange={print} style={{visibility: "hidden"}}/>
        </label>
        
    </div>
}

let props = state => ({
    files: getPinnedFiles(state)
})

let actions = {addFile}

export default connect(props, actions)(FileKeeper)