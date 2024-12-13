function CardItem({food, addToCart}){
    return (
      <>
        <div className="col p-3">
        <div className="card">
             <img src={food.imageUrl} class="card-img-top" alt="image-poster"/>
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">{food.name_food}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-center"> kategori {food.kategori}</li>
              <li className="list-group-item d-flex justify-content-center">Rp {food.harga}</li>
            </ul>
            <div  className="card-body d-flex justify-content-center gap-2">
              <a href="#" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target={'#modal'+ food.id}>Detail</a>
              <a href="#" onClick={()=> {addToCart(food);
            }} className="btn btn-primary">tambahkan</a>
            </div>
        </div>    
        </div>
        {/* <!-- Modal --> */}
        <div class="modal fade" 
        id={'modal'+ food.id} 
        tabIndex="-1" 
        aria-labelledby="exampleModalLabel" 
        aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{food.name_food}</h1>
                <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            <div className="modal-body">
              <p>
              <img src={food.imageUrl} class="card-img-top" alt="image-poster"/>
              {food.detail}
              </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={()=> {addToCart(food);
            }} type="button" className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
      </div>  
      </>  
    )
};

export default CardItem;