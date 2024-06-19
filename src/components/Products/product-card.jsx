import "./products.css"


const ProductCard = ({image,name}) =>{
    
    return( 
    
        <div class="display-card">
            <div>
                <img class="card-image" src={image} 
                />
            </div>

         
            <div class="card-name"> {name} </div>  
            
        </div>
        
    )

}
export default ProductCard