const SectionTitle = ({heading, subHeading}) => {
    return (
      <div className="mx-auto text-center w-48 md:w-4/12 my-4 lg:my-8">
        <p className="text-green-600 mb-2 text-xs m:text-sm">--- {subHeading} ---</p>
        <h3 className="text-lg m:text-2xl lg:text-3xl uppercase border-y-4 py-2 m:py-4">{heading}</h3>
      </div>
    );
  };
  
  export default SectionTitle;
  