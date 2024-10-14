import React from "react";
export const Jumbotron = () =>{
      return(
            <div className="container py4 text-center">
                <div>
                    <div className="container-fluid py-5 ">
                        <h1 className="display-5 fw-bold text-start ">A Warm Welcome!</h1>
                    
                        <p className="col-md-8 fs-6 text-start" ><strong>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptas earum eveniet ipsam soluta rem animi officia placeat facilis autem sunt nam reiciendis illo nostrum dolorum reprehenderit quod? Repellat, quasi?</strong>               
                        </p>
                        <div class="btn-group">
                            <button
                               
                                className="btn btn-primary active"
                                aria-current="page"
                                >Componente
                            </button>
    
    
                            <button
                              
                                className="btn btn-primary active ms-2"
                                aria-current="page"
                                >Con y sin React
                            </button>
                            <button
                                
                                className="btn btn-primary active ms-2 rounded-end "
                                aria-current="page"
                                >Reacciones
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}