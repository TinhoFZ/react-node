import { Link } from 'react-router-dom';

type ButtonProps = {
    route: string;
    text: string;
    className?: string;
}

export default function Button(props: ButtonProps) {


    return(
        <Link 
        to={props.route} 
        type='button' 
        className={`inline-block py-2 px-3 text-white rounded-xl bg-neutral-800 hover:bg-neutral-900 active:bg-neutral-950 ${props.className}`}
        >
            {props.text}
        </Link>
    )
}