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

  <fieldset class="rating2">
    PARKING
      <input type="radio" id="star6" name="rating2" value="5" /><label for="star6" title="Rocks!">5 stars</label>
      <input type="radio" id="star7" name="rating2" value="4" /><label for="star7" title="Pretty good">4 stars</label>
      <input type="radio" id="star8" name="rating2" value="3" /><label for="star8" title="Meh">3 stars</label>
      <input type="radio" id="star9" name="rating2" value="2" /><label for="star9" title="Kinda bad">2 stars</label>
      <input type="radio" id="star10" name="rating2" value="1" /><label for="star10" title="Sucks big time">1 star</label>
  </fieldset>

    <fieldset class="rating3">
      CLEANLINESS
      <input type="radio" id="star11" name="rating3" value="5" /><label for="star11" title="Rocks!">5 stars</label>
      <input type="radio" id="star12" name="rating3" value="4" /><label for="star12" title="Pretty good">4 stars</label>
      <input type="radio" id="star13" name="rating3" value="3" /><label for="star13" title="Meh">3 stars</label>
      <input type="radio" id="star14" name="rating3" value="2" /><label for="star14" title="Kinda bad">2 stars</label>
      <input type="radio" id="star15" name="rating3" value="1" /><label for="star15" title="Sucks big time">1 star</label>
  </fieldset>

  <fieldset class="rating4">
    SAFETY
      <input type="radio" id="star16" name="rating4" value="5" /><label for="star16" title="Rocks!">5 stars</label>
      <input type="radio" id="star17" name="rating4" value="4" /><label for="star17" title="Pretty good">4 stars</label>
      <input type="radio" id="star18" name="rating4" value="3" /><label for="star18" title="Meh">3 stars</label>
      <input type="radio" id="star19" name="rating4" value="2" /><label for="star19" title="Kinda bad">2 stars</label>
      <input type="radio" id="star20" name="rating4" value="1" /><label for="star20" title="Sucks big time">1 star</label>
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
