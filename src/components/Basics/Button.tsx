import React from 'react';
import { Wrapper } from './Button.styles';

const Button = (props: any) => {
    return (
        <Wrapper>
            <button className="button button-primary">
                <i className="fa fa-chevron-right"></i> <span>{props.label}</span>
            </button>
        </Wrapper>
    );
};

export default Button;
