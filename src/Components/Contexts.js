const Contexts = ({ contexts, url, handleDelete }) => {
    return (
        <ul className="context_list">
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

/* <button onClick={() => handleDelete(url, context.id)}>
                            Delete
                        </button>
                        TODO Make not crash */
