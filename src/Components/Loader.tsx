import '../Styles/Loader.css';

const Loader = ({
                    loading,
                    success,
                    failure,
                }: {
    loading: boolean;
    success: boolean;
    failure: boolean;
}) => {
    if (!loading && !success && !failure) return null;

    return (
        <div className="fixed inset-0 bg-black/25 z-50 flex items-center justify-center">
            <div className="flex flex-col items-center">
                {loading && <div className="loader border-t-green-500"></div>}

                {success && (
                    <div className="checkmark-container">
                        <svg className="checkmark" viewBox="0 0 52 52">
                            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark-check" fill="none" d="M14 27l7 7 16-16" />
                        </svg>
                        <p className="text-white text-lg mt-4">Message Sent Successfully!</p>
                    </div>
                )}

                {failure && (
                    <div className="xmark-container">
                        <svg className="xmark" viewBox="0 0 52 52">
                            <circle className="xmark-circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="xmark-line xmark-line1" d="M16 16 36 36" />
                            <path className="xmark-line xmark-line2" d="M36 16 16 36" />
                        </svg>
                        <p className="text-white text-lg mt-4">Message Not Sent!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Loader;
