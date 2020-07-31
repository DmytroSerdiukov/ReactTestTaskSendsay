import React from 'react'

export const Element = Element => ({input, meta, ...props}) => {
 // const hasError = meta.touched && meta.error
  return <div>
    <Element type='text' {...input} {...props}/>
    {renderError(meta)}
  </div>
}

export const renderError = ({error, touched}) => <div>
  {touched && error}
</div>


export default Element