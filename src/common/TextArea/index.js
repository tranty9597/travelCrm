import React, { PureComponent } from 'react';
import classnames from 'classnames';
import cls from './styles.module.scss';
type TextAreaProps = {
    cols?: String,
    rows?: String,
    onChange?: Function,
    className?: String,
    label?: String
}

class TextArea extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { label, className, ...props } = this.props;
        return (
            <div >
                <div className={classnames(cls.textArea_label)}>
                    {label}
                </div>
                <textarea
                    className={classnames(cls.box_textarea, cls.textarea,className)}
                    {...props}
                ></textarea>
            </div>
        );
    }
}

TextArea.defaultProps = {
    cols: "",
    rows: "",
    onChange: () => { },
    label: ""
}

export default TextArea;