import React from 'react'
import StyledSpan from './styled_span.js'
import StyledList from './styled_span.js'
import { connect } from 'react-redux'
import {getPinnedFiles} from './../../reducer/selectors'
import {addFile} from './../../reducer/formHandleReducer'
import PinnedFile from './PinnedFile.jsx'
import {StyledFileList} from './styled_span'
const FileKeeper = props => {

    const PinFile = e => {
        e.preventDefault()
        console.log(e)
        props.addFile(e)
    }

    return <div>
        <StyledFileList>{props.files.map((f, i) => <PinnedFile number={i} /> )}</StyledFileList>
        <label>
            Прикрепить файл
            <input type="file" onChange={PinFile} style={{visibility: "hidden"}}/>
        </label>
        
    </div>
}

let props = state => ({
    files: getPinnedFiles(state)
})

let actions = {addFile}

export default connect(props, actions)(FileKeeper)