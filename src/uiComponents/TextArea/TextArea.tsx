import ITextAreaProps from './TextAreaProps'

const TextArea = ({ label, setState, state }: ITextAreaProps) => {
    return (
        <div className="form-floating">
            <textarea
                className="form-control"
                value={state}
                placeholder={label}
                style={{height: '75px', width: '300px'}}
                id={`floatingTextarea ${label}`}
                onChange={(e) => {
                    setState(e.target.value)
                }}
            ></textarea>
            <label htmlFor={`floatingTextarea ${label}`} style={{ width: '100%' }}>{label}</label>
        </div>
    )
}

export default TextArea