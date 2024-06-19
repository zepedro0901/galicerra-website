import beholder from "../../assets/_Gallery/Aboleth/Aboleth_01_A.jpg"
import bullete from "../../assets/_Gallery/Bulette/Bulette_01.jpg"
import ProductCard from "./product-card"
import "./products.css"
import imagesImports from "./images-imports.jsx"






const ProductsData = [
    {
        id: 1,  
        img: beholder,
        name: "Beholder"
    },
    {
        id: 2 ,
        img: bullete,
        name:"Bullete",   
    },
    {
        id: 3 ,
        img: bullete,
        name:"Bullete",   
    },{
        id: 4 ,
        img: bullete,
        name:"Bullete",   
    },{
        id: 5 ,
        img: bullete,
        name:"Bullete",   
    },{
        id: 6 ,
        img: bullete,
        name:"Bullete",   
    },{
        id: 7 ,
        img: bullete,
        name:"Bullete",   
    },{
        id: 8 ,
        img: bullete,
        name:"Bullete",   
    },{
        id: 9 ,
        img: bullete,
        name:"Bullete",   
    },{
        id: 10 ,
        img: bullete,
        name:"Bullete",   
    },{
        id: 11,
        img: bullete,
        name:"Bullete",   
    },{
        id: 12,
        img: bullete,
        name:"Bullete",   
    },{
        id: 13,
        img: bullete,
        name:"Bullete",   
    },{
        id: 14,
        img: bullete,
        name:"Bullete",   
    },{
        id: 15,
        img: bullete,
        name:"Bullete",   
    },{
        id: 16,
        img: bullete,
        name:"Bullete",   
    },

    ]



const ProductsDisplay = () => {
   console.log(imagesImports.abyssalChickenFolder)

    return (
       
            <div class="cards-container">
                {ProductsData.map((data)=>(
                    <ProductCard key={data.id} image={data.img} name={data.name} />        
                
                ))}
            </div>
       
    )
}

export default ProductsDisplay