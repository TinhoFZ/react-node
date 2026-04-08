import { Link } from 'react-router-dom';

type ButtonProps = {
    route: string;
    text: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function Button(props: ButtonProps) {


    return(
        <Link 
        to={props.route} 
        className={`inline-block py-2 px-3 text-white rounded-xl bg-neutral-800 hover:bg-neutral-900 active:bg-neutral-950 ${props.className}`}
        onClick={props.onClick}
        >
            {props.text}
        </Link>
    )
}