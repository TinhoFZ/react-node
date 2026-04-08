type InputProps = {
    placeholder: string;
    value?: string;
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input(props: InputProps) {

    return(
        <input 
        placeholder={props.placeholder}
        value={props.value}
        className={`bg-white ${props.className}`}
        onChange={props.onChange}
         />
    )
}