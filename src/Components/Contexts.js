const Contexts = ({ contexts }) => {
    return (
        <ul className="ContextList">
            {contexts.map((context) => {
                return (
                    <li key={context.id}>
                        {context.id}: {context.title}
                    </li>
                );
            })}
        </ul>
    );
};

export default Contexts;
