import React, { useEffect, useState } from 'react'
import './products.scss'
import axios from 'axios';
import {ScaleLoader} from 'react-spinners';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const getAllProducts = async () => {
        setLoading(true);
        try {
            const{data} = await axios.get('/api/v1/product/get-product');
            setProducts(data.products);
            console.log(data.products);

        } catch(error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect (() => {
        if(imagesLoaded === products.length &products.length > 0) {
            setLoading(false)
        }
    }, [imagesLoaded, products.length]);

    const handleImageLoad = () => {
        setImagesLoaded((prevCount) => prevCount + 1);
    }

    return (
        <>
            <div className='filter__btns__grp'>
                <button>filter</button>
            </div>

            {/* <div className="loading__screen">
                <ScaleLoader color= "orange" size={50}/>
                <p>Loading Products...</p>
            </div> */}

        {
            loading ? (
                <div className="loading__screen">
                    <ScaleLoader color= "orange" size={50}/>
                    <p>Loading Products...</p>
                </div>
            ) : 
            (
                <ul className="products__list">
                    {products.map((product, index) => (
                        <li className='single__product' key={product._id}>
                            <div className='products__card'>
                                <img src={product.photo} alt={product.name} onLoad={handleImageLoad} loading="lazy"/>
                                <h6 className='product__name'>{product.name}</h6>
                                <p className='product__price'>रू{product.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )
        }

           
        </>
    )
}

export default Products