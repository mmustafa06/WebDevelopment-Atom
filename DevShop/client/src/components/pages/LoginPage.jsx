import React from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
const LoginPage = () => {
  return (
    <React.StrictMode>
      <Header />
      <section className="section-content padding-y bg">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <aside class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-4">Sign in</h4>
                  <form>
                    <a href="#" class="btn btn-facebook btn-block mb-2">
                      {" "}
                      <i class="fab fa-facebook-f"></i> &nbsp; Sign in with
                      Facebook
                    </a>
                    <a href="#" class="btn btn-google btn-block mb-4">
                      {" "}
                      <i class="fab fa-google"></i> &nbsp; Sign in with Google
                    </a>
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            {" "}
                            <i class="fa fa-user"></i>{" "}
                          </span>
                        </div>
                        <input
                          name=""
                          class="form-control"
                          placeholder="Username"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            {" "}
                            <i class="fa fa-lock"></i>{" "}
                          </span>
                        </div>
                        <input
                          name=""
                          class="form-control"
                          placeholder="Password"
                          type="password"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          checked=""
                        />
                        <div class="custom-control-label"> Remember </div>{" "}
                      </label>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        {" "}
                        Login{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </React.StrictMode>
  );
};
export default LoginPage;
