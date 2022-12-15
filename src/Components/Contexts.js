const Contexts = ({ contexts, url, handleDelete }) => {
    return (
        <ul className="context-list">
            {contexts.map((context) => {
                return (
                    <ul className="context-item" key={context.id}>
                        <li>
                            {context.id}: {context.title}
                        </li>
                        <button onClick={() => handleDelete(url, context.id)}>
                            Delete
                        </button>
                    </ul>
                );
            })}
        </ul>
    );
};

export default Contexts;
