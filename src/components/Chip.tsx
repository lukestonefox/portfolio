function Chip(props: {label: string}) {
    return (
        <div className="px-3 py-1 bg-white/50 rounded-2xl">
            {props.label}
        </div>
    )
}

export default Chip;