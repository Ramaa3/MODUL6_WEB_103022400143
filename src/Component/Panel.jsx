function panel({ judul, children }) {
    return (
        <div classname="Panel" >
            {judul &&

                <h2>
                    {judul}
                </h2>
            }
            {
                children

            }
        </div>
    )
}