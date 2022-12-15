const Contexts = ({ contexts, url, handleDelete }) => {
    return (
        <ul className="context-list">
            {contexts.map((context) => {
                return (
                    <div className="context-item" key={context.id}>
                        <li>
                            {context.id}: {context.title}
                        </li>
                        <button onClick={() => handleDelete(url, context.id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </ul>
    );
};

export default Contexts;
