interface name {
    name: string
}

function MatchupPage(props:name) {
    return (
        <>
            <h1>Title {props.name}</h1>
        </>
    )
}
export default MatchupPage