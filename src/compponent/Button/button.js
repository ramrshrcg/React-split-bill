
export default function Button({onClick,show ,children}) {

    return (
        <button className="button" value={show} onClick={onClick}>

            <span className="button__text">{children}</span>
        </button>
    )
}