import React from 'react'
import StyledButton from './styled_Button'
//Если все поля формы не заполнены, сделать кнопку недоступной, 
//если поля заполнены - разрешить отправку

const Button = ({disabled}) => {
    return <StyledButton disabled={disabled}>Отправить</StyledButton>
}

export default Button