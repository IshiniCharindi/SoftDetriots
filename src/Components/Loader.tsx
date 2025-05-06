import '../Styles/Loader.css';

const CartLoader = ({
                        loading,
                        success,
                        failure,
                        text
                    }: {
    loading: boolean;
    success: boolean;
    failure: boolean;
    text: string;
}) => {
    if (!loading && !success && !failure) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="flex flex-col items-center">
                {loading && <div className="loader border-t-green-500"></div>}

                {success && (
                    <div className="checkmark-container">
                        <svg className="checkmark" viewBox="0 0 56 56" width="72" height="72">
                            <circle className="checkmark-circle" cx="28" cy="28" r="25" fill="none"/>
                            <path className="checkmark-check" fill="none" d="M14 29l7 7 16-16"/>
                        </svg>
                        <p className="text-white text-lg mt-4">{text}</p>
                    </div>
                )}

                {failure && (
                    <div className="xmark-container">
                        <svg className="xmark" viewBox="0 0 56 56" width="72" height="72">
                            <circle className="xmark-circle" cx="28" cy="28" r="25" fill="none"/>
                            <path className="xmark-line" d="M18 18 38 38"/>
                            <path className="xmark-line" d="M38 18 18 38"/>
                        </svg>
                        <p className="text-white text-lg mt-4">{text}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartLoader;