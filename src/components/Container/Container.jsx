const Container = ({ className, children }) => {
	return <div className={"max-w-[1300px] px-[20px] md:px-[40px] mx-auto w-full " + className}>{children}</div>;
};

export default Container;
