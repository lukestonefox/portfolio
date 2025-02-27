function Chip(props: {label: string}) {
    return (
        <div className="px-2 py-1 bg-white/50 rounded-md">
            {props.label}
        </div>
    )
}

export default Chip;