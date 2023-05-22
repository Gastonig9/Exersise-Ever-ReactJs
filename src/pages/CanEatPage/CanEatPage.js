import React, { useEffect, useState } from 'react';
import "./CanEatPage.css"
import Swal from 'sweetalert2'
import HeaderPageCanEat from '../../components_CanEat/HeaderPageCanEat';
import Loader from "../../components/Loader/Loader"

export default function CanEatPage() {
    const [isLoading, setisLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("");
    const [foodData, setFoodData] = useState(null);
    const API_KEY = 'db96350bc4a2efd016267667ee9ede1f';
    const API_ID = '89c82aa6'

    useEffect(() => {
        let count = 0;

        const loader = setInterval(() => {
            count++
            if (count === 2) {
                setisLoading(false)
                clearInterval(loader)
            }
        }, 1000);

    }, [])

    const handleSearch = async () => {
        try {
            const response = await fetch(
                `https://api.edamam.com/api/food-database/v2/parser?app_id=${API_ID}&app_key=${API_KEY}&ingr=${searchTerm}&nutrition-type=cooking`
            );
            const data = await response.json();
            setFoodData(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAlert = () => {
        let fats = foodData.hints[0].food.nutrients.FAT;
        let carbs = foodData.hints[0].food.nutrients.CHOCDF;

        if (fats <= 3 || carbs >= 5 || carbs <= 20) {
            Swal.fire({
                icon: 'success',
                title: 'YES',
                text: 'You can consume this product!',
            })

        } else {
            Swal.fire({
                icon: 'error',
                title: 'NOPE',
                text: 'You should not consume this product',
            })
        }
    }

    return (
        <>
            {isLoading ?
                <Loader />
                :
                <>
                    <HeaderPageCanEat />
                    <section className="food-search-section">
                        <h2 className="section-title">Food Search</h2>
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search for food..."
                                value={searchTerm}
                                onChange={handleChange}
                                className="search-input"
                            />
                            <button onClick={handleSearch} className="search-button">
                                Search
                            </button>
                        </div>
                        {foodData ? (
                            <>
                                <div className="food-info-container">
                                    <div className="food-image">
                                        <img src={foodData.hints[0].food.image} alt="Food" />
                                    </div>
                                    <div className="food-description">
                                        <h3>{foodData.hints[0].food.label}</h3>
                                        <p>Category: {foodData.hints[0].food.category}</p>
                                        <hr />
                                        <p>Brand: {foodData.hints[0].food.brand}</p>
                                        <hr />
                                        <p>Energy: {foodData.hints[0].food.nutrients.ENERC_KCAL} kcal</p>
                                        <hr />
                                        <p>Protein: {foodData.hints[0].food.nutrients.PROCNT} g</p>
                                        <hr />
                                        <p>Fat: {foodData.hints[0].food.nutrients.FAT} g</p>
                                        <hr />
                                        <p>Carbohydrates: {foodData.hints[0].food.nutrients.CHOCDF} g</p>
                                        <hr />
                                        <p>Fiber: {foodData.hints[0].food.nutrients.FIBTG} g</p>
                                    </div>
                                </div>
                                <button onClick={handleAlert} className="button-alert">Can Eat?</button>
                            </>
                        )
                            :
                            <div className='section-error'> 
                                <h1>Please find food</h1>
                                <img src='https://i.ibb.co/HFNd1B6/lupa.png' alt='glass' />
                            </div>
                        }

                    </section>
                </>
            }


        </>
    );
}
