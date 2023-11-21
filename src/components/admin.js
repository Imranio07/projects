import React from "react";
import { useSelector, useDispatch } from "react-redux";
const CartPage = () => {
  const { allCart } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                </div>
                <div className="card-body">
                  {allCart?.map((data) => (
                    <div className="row" key={data.id}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={data.img}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{data.title}</strong>
                        </p>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                            <label className="form-label" htmlFor="form1">
                              Quantity
                            </label>
                          </div>


                        </div>

                        <p className="text-start text-md-center">
                          <strong>{data.price}</strong>
                        </p>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
