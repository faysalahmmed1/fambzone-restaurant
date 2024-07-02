

const SectionTitle = ({heading, subHeding}) => {

    return (
        <div className="mx-auto md:w-4/12 my-5">
            <p className="text-amber-300">{subHeding}</p>
            <h3 className="text-3xl mt-2 border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;