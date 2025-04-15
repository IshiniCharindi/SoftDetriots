import "../styles/headSection.css";
function HeadSection(props: any) {
    return (
        <div
            className="headSection1 h-[61vh]  sm:min-h-[67vh] md:min-h-[76vh]  flex flex-col justify-center items-center text-center py-40 "
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${props.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

            }}
        >
            <p id="heading" className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold text-white max-w-5xl" style={{ marginBottom: "0.5rem" }}>
                {props.heading}
            </p>
            <p className=" mx-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium text-white max-w-3xl" style={{ marginTop: "0.2rem" }}>
                {props.para}
            </p>


        </div>
    );
}

export default HeadSection;
