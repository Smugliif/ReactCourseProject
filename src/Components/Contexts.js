const Contexts = ({ contexts, url, handleDelete }) => {
    return (
        <ul className="context_list">
            {contexts.map((context) => {
                return (
                    <div key={context.id} className="context_item">
                        <li>
                            {context.id}: {context.title}
                        </li>
                        {/* <button onClick={() => handleDelete(url, context.id)}>
                            Delete
                        </button> TODO Make not crash*/}
                    </div>
                );
            })}
        </ul>
    );
};

export default Contexts;
