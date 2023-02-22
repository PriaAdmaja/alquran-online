const UpButton = () => {
    const scrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="up-button" onClick={() => scrollTop()}>TOP</div>
    )
}

export default UpButton