import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/StarRating.css'


class NewReview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        area: '',
        dining: '',
        parking: '',
        cleaniness: '',
        safety: '',
        price: '',
        family_friendly: '',
        review_text: '',
        avatar_base: null
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

  handleSubmit(event) {
      event.preventDefault();
    }

  fileChangeHandler(event){
  const file = event.target.files[0]
}

  render() {
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


      <fieldset class="rating">
        DINING
      <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
      <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
      <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
      <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
      <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
  </fieldset>

  <fieldset class="rating">
    PARKING
      <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
      <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
      <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
      <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
      <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
  </fieldset>

    <fieldset class="rating">
      CLEANLINESS
      <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
      <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
      <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
      <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
      <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
  </fieldset>

  <fieldset class="rating">
    SAFTEY
      <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
      <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
      <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
      <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
      <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
  </fieldset>
            <input
              className="form-item"
              placeholder="$ - Price per Person Spent"
              name="country"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.country}
            />
            <div>
            Family Friendly?
            </div>

            <input type="radio" name="family_friendly" value="yes"  /> YES
            <input type="radio" name="family_friendly" value="no"  /> NO
            <br />

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
