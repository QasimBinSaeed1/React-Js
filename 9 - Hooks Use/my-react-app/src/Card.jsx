function Card({ title, body }) {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p>{body}</p>
            </div>
        </>

    );
}

export default Card