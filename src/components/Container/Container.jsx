const Container = ({ className, children }) => {
	return <div className={"max-w-[1280px] px-5 md:px-[40px] mx-auto w-full " + className}>{children}</div>;
};

export default Container;
