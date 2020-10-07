import React from "react";

const Home = () => {
  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card blue darken-3">
            <div className="card-content white-text">
              <span className="card-title center">Welcome Products CRUD</span>
							<hr/>
              <p>
                This is simple app to show integration of React with Apollo
                Client to fetch data from GraphQL API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
