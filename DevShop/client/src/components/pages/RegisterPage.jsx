import React from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
const RegisterPage = () => {
  return (
    <React.StrictMode>
      <Header />
      <section className="section-content padding-y bg">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <aside class="col-md-6">
              <div class="card">
                <article class="card-body">
                  <header class="mb-4">
                    <h4 class="card-title">Sign up</h4>
                  </header>
                  <form>
                    <div class="form-row">
                      <div class="col form-group">
                        <label>First name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        />
                      </div>
                      <div class="col form-group">
                        <label>Last name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" class="form-control" placeholder="" />
                      <small class="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div class="form-group">
                      <label class="custom-control custom-radio custom-control-inline">
                        <input
                          class="custom-control-input"
                          checked=""
                          type="radio"
                          name="gender"
                          value="option1"
                        />
                        <span class="custom-control-label"> Male </span>
                      </label>
                      <label class="custom-control custom-radio custom-control-inline">
                        <input
                          class="custom-control-input"
                          type="radio"
                          name="gender"
                          value="option2"
                        />
                        <span class="custom-control-label"> Female </span>
                      </label>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>City</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="form-group col-md-6">
                        <label>Country</label>
                        <select id="inputState" class="form-control">
                          <option> Choose...</option>
                          <option>Uzbekistan</option>
                          <option>Russia</option>
                          <option selected="">United States</option>
                          <option>India</option>
                          <option>Afganistan</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>Create password</label>
                        <input class="form-control" type="password" />
                      </div>
                      <div class="form-group col-md-6">
                        <label>Repeat password</label>
                        <input class="form-control" type="password" />
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <button type="submit" class="btn btn-primary btn-block">
                        {" "}
                        Register{" "}
                      </button>
                    </div>
                    <p class="text-muted">
                      By clicking the 'Sign Up' button, you confirm that you
                      accept our Terms of use and Privacy Policy.
                    </p>
                  </form>
                  <hr />
                  <p class="text-center">
                    Have an account? <a href="">Log In</a>
                  </p>
                </article>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </React.StrictMode>
  );
};
export default RegisterPage;
