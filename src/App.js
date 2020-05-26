import React, { Component } from 'react';
import { connect } from 'react-redux';
import makeDonutAction from './actions/makeDonutAction';
import makeCakeAction from './actions/makeCakeAction';
import restockIngredientsAction from './actions/restockIngredientsAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mt-3 text-center">
          <header className="col-md-12">
            <h1>Bakery Kitchen</h1>
            <h2>Ready</h2>
            <h3 className="d-inline"><span>{this.props.ready.donut}</span> Donuts & </h3>
            <h3 className="d-inline"><span>{this.props.ready.cake}</span> Cakes</h3>
          </header>
          <main className="col-md-5 mt-4">
            <div className="card">
              <div className="card-body">
                <div>
                  <strong>Flour </strong>
                  <span>{this.props.ingredients.flour}</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div>
                  <strong>Choco </strong>
                  <span>{this.props.ingredients.choco}</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div>
                  <strong>Cherry </strong>
                  <span>{this.props.ingredients.cherry}</span>
                </div>
              </div>
            </div>
          </main>
          <footer className="col-md-12 mt-4">
            <div className="btn-group btn-group-lg">
              <button className="btn btn-warning" onClick={this.props.handleMakeDonut}>Make 1 Donutt</button>
              <button className="btn btn-danger" onClick={this.props.handleMakeCake}>Make 1 Cake</button>
              <button className="btn btn-secondary" onClick={this.props.handleRestock}>Restock Ingredients</button>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    ingredients: state.ingredients.ingredient,
    ready: state.ingredients.readystock
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    handleMakeDonut: () => dispatch(makeDonutAction),
    handleMakeCake: () => dispatch(makeCakeAction),
    handleRestock: () => dispatch(restockIngredientsAction)
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
