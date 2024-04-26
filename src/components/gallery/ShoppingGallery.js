import React, { useState } from 'react';
import { useAuth } from "../auth";
import axios from 'axios';
import AddToCart from '../AddToCart';


export default function ShoppingGallery() {
    const auth= useAuth();
    const recipientEmail = auth.mail;
    const user = auth.user;
    const [selectedImage, setSelectedImage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const handleAddToCart = async (productId) => {
        try {
            const userId = user.id; // Assuming user id is available in the auth context
            await axios.post('/api/cart/add-to-cart', { userId, productId });
            setShowSuccessMessage(true); // Display success message when item is added to cart
            setTimeout(() => {
                setShowSuccessMessage(false); // Hide success message after a short delay
            }, 2000);
        } catch (error) {
            console.log('Error adding product to cart:', error);
        }
    };
    const products = [
        { id: 1, name: 'Fancy Product', price: '40.00 - $80.00', imageUrl: 'https://artist.com/photos/arts/big/bright-nature--1800359779.jpg' },
        { id: 2, name: 'Special Item', price: '$18.00', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.if_cidFAKZ49wY7BLA3feQHaGE&pid=Api&P=0&h=180' },
        { id: 2, name: 'Sale Item', price: '$18.00', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.if_cidFAKZ49wY7BLA3feQHaGE&pid=Api&P=0&h=180' },
        { id: 2, name: 'Popular Item', price: '$18.00', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.6RAG9jBjKuMOmRVj2zXSpQHaHI&pid=Api&P=0&h=180' },
        { id: 2, name: 'Sale Item', price: '$18.00', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.pn0MhRZhVribsmC-0lDxgQHaE3&pid=Api&P=0&h=180' },
        { id: 2, name: 'Fancy Product', price: '$18.00', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP._R6_mKEioaMF64XrxiYjsgHaFI&pid=Api&P=0&h=180' },
        { id: 2, name: 'Special Item', price: '$18.00', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.5DDwi2GI16q7LyIehowmLAHaEo&pid=Api&P=0&h=180' },
        { id: 2, name: 'Popular Item', price: '$18.00', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.QiFjcAidmwt9zskQKmkvFgHaFj&pid=Api&P=0&h=180' },
    ];

    
    const handleMail = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/buyMail', {user, recipientEmail}).then(res=>console.log("successful purchase")).catch(err=>console.log(err))
    }
  
  return (
    
    <div>
              <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://artist.com/photos/arts/big/bright-nature--1800359779.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button className="btn btn-outline-dark mt-auto" onClick={() => handleAddToCart("item.id")}>Add To Cart</button></div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://tse2.mm.bing.net/th?id=OIP.if_cidFAKZ49wY7BLA3feQHaGE&pid=Api&P=0&h=180" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Special Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://tse2.mm.bing.net/th?id=OIP.if_cidFAKZ49wY7BLA3feQHaGE&pid=Api&P=0&h=180" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Sale Item</h5>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://tse3.mm.bing.net/th?id=OIP.6RAG9jBjKuMOmRVj2zXSpQHaHI&pid=Api&P=0&h=180" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Popular Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    $40.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://tse4.mm.bing.net/th?id=OIP.pn0MhRZhVribsmC-0lDxgQHaE3&pid=Api&P=0&h=180" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Sale Item</h5>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://tse4.mm.bing.net/th?id=OIP._R6_mKEioaMF64XrxiYjsgHaFI&pid=Api&P=0&h=180" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $120.00 - $280.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://tse1.mm.bing.net/th?id=OIP.5DDwi2GI16q7LyIehowmLAHaEo&pid=Api&P=0&h=180" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Special Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://tse3.mm.bing.net/th?id=OIP.QiFjcAidmwt9zskQKmkvFgHaFj&pid=Api&P=0&h=180" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Popular Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    $40.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AddToCart handleAddToCart={handleAddToCart} />
    </div>
  )
}

