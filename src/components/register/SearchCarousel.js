import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};


const SearchCarousel = ({
  searchResults, 
  setResult, 
  setIsScrollToStep3
})=>{
  
  return (
    <>
          <Carousel responsive={responsive}>
            {searchResults.map((item, index)=>(
                <img 
                  key={index} 
                  src={item.thumbnail} 
                  className="h-150 c-p"
                  alt="img" 
                  onClick={()=>{
                    setResult(item);
                    setIsScrollToStep3(true)
                  }}
                
                />
            ))}
          </Carousel>
    </>
  )
}

export default SearchCarousel