import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/StarRating.css'
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';



class NewReview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        area: '',
        parking: '',
        cleanliness: '',
        safety: '',
        price: '',
        family_friendly: '',
        review_text: '',
        avatar_base: null,
        area_rating: 1,
        parking_rating: 1,
        cleanliness_rating: 1,
        safety_rating: 1
      },
      apiUrl: "http://localhost:3000",
      review: [],
      newReviewSuccess: false,
      errors: null
    }
  }

  handleChange(event) {
      const formState = Object.assign({}, this.state.form)
      formState[event.target.name] = event.target.value
      this.setState({form: formState})
    }

  onStarClick(nextValue, prevValue, name) {
      if (name == "area_rating") {
        this.setState({area_rating: nextValue});
      }
      else if (name == "parking_rating") {
        this.setState({parking_rating: nextValue});
      }
      else if (name == "cleanliness_rating") {
        this.setState({cleanliness_rating: nextValue});
      }
      else {
        this.setState({safety_rating: nextValue});
      }
    }

  handleSubmit(event) {
      event.preventDefault();
    }

  fileChangeHandler(event){
  const file = event.target.files[0]
}

  render() {
     const { area_rating } = this.state;
     const { parking_rating } = this.state;
     const { cleanliness_rating } = this.state;
     const { safety_rating } = this.state;

    return (
      <div className="center">
        <div className="card">
          <h1 className = "title">Submit Your Review</h1>
          <form onSubmit={this.handleSubmit.bind(this)}
          >
          <div> CHOOSE YOUR AREA </div>
          <select>
            <option value="east_village">East Village</option>
            <option value="little_italy">Little Italy</option>
            <option value="north_park">North Park</option>
            <option value="gaslamp">Gaslamp</option>
            <option value="coronado">Coronado</option>
            <option value="shelter_island_area">Shelter Island Area</option>
            <option value="ocean_beach">Ocean Beach</option>
            <option value="loma_portal">Loma Portal</option>
          </select>

      <div>
        <h3>Rate the Area: {area_rating}/5</h3>
        <StarRatingComponent
          name="area_rating"
          starCount={5}
          value={area_rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h3>Rate the Parking: {parking_rating}/5</h3>
        <StarRatingComponent
          name="parking_rating"
          starCount={5}
          value={parking_rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h3>Rate the Cleanliness: {cleanliness_rating}/5</h3>
        <StarRatingComponent
          name="cleanliness_rating"
          starCount={5}
          value={cleanliness_rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h3>Rate the Safety: {safety_rating}/5</h3>
        <StarRatingComponent
          name="safety_rating"
          starCount={5}
          value={safety_rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>

           <input
              className="form-item"
              placeholder="$ - Price per Person Spent"
              name="price"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.price}
            />
            <div>
            Family Friendly? <nbs />
            <input type="radio" name="family_friendly" value="yes"  /> YES <nbs />
            <input type="radio" name="family_friendly" value="no"  /> NO
            </div>


            <div>Write your review here: </div>
            <textarea>

            </textarea>
            <br />
            <input
              type="file"
              onChange={this.fileChangeHandler.bind(this)}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>
        </div>

        { this.state.newReviewSuccess && <Redirect to='/reviews' /> }
      </div>
    );
  }
}

export default NewReview
