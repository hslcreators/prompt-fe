import { motion } from "framer-motion";
import { pageTransition } from "@utils/framer-default-animations";

const PageContainer = ({ className, children }) => {
	return (
		<motion.main
			className={className}
			{...pageTransition}
		>
			{children}
		</motion.main>
	);
};

export default PageContainer;
