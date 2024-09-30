const Ratings = ({ rating, createRating, changeRating }) => {
    return(
        <div className={`w-[80%]  flex  ${createRating? `h-[80%]`: `h-[20px] max-h-[24px]`} lg:relative right-[4px]`} style={ { pointerEvents: createRating? 'all': 'none' } }>
			<div className="w-[20%] h-[100%] flex justify-center">
				<button className={`h-[97%] ${rating >= 1? `bg-[goldenrod]`: `bg-[gray]`} aspect-[1]`} style={ { clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' } } onClick={ () => {
                    if(changeRating){
                        changeRating(1)
                    }
                } }></button>
			</div>
            <div className="w-[20%] h-[100%] flex justify-center">
				<button className={`h-[97%] ${rating >= 2? `bg-[goldenrod]`: `bg-[gray]`} aspect-[1]`} style={ { clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' } } onClick={ () => {
                    if(changeRating){
                        changeRating(2)
                    }
                } }></button>
			</div>
            <div className="w-[20%] h-[100%] flex justify-center">
				<button className={`h-[97%] ${rating >= 3? `bg-[goldenrod]`: `bg-[gray]`} aspect-[1]`} style={ { clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' } } onClick={ () => {
                    if(changeRating){
                        changeRating(3)
                    }
                } }></button>
			</div>
            <div className="w-[20%] h-[100%] flex justify-center">
				<button className={`h-[97%] ${rating >= 4? `bg-[goldenrod]`: `bg-[gray]`} aspect-[1]`} style={ { clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' } } onClick={ () => {
                    if(changeRating){
                        changeRating(4)
                    }
                } }></button>
			</div>
            <div className="w-[20%] h-[100%] flex justify-center">
				<button className={`h-[97%] ${rating >= 5? `bg-[goldenrod]`: `bg-[gray]`} aspect-[1]`} style={ { clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' } } onClick={ () => {
                    if(changeRating){
                        changeRating(5)
                    }
                } }></button>
			</div>
		</div>
    )
} 

export default Ratings