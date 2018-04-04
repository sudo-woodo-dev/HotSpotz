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
        area: 'eastvillage',
        area_rating: 0,
        parking: 0,
        cleanliness: 0,
        safety: 0,
        dining: 0,
        price: 0,
        family_friendly: false,
        review_text: ''
      },
      apiUrl: "http://localhost:3000",
      reviews: [],
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
        this.setState({area_rating: nextValue})
        const formState = Object.assign({}, this.state.form)
        formState[name] = nextValue
        this.setState({form: formState})
      }
      else if (name == "parking") {
        this.setState({parking: nextValue});
        const formState = Object.assign({}, this.state.form)
        formState[name] = nextValue
        this.setState({form: formState})
      }
      else if (name == "cleanliness") {
        this.setState({cleanliness: nextValue});
        const formState = Object.assign({}, this.state.form)
        formState[name] = nextValue
        this.setState({form: formState})
      }
      else if (name == "dining") {
        this.setState({dining: nextValue});
        const formState = Object.assign({}, this.state.form)
        formState[name] = nextValue
        this.setState({form: formState})
      }
      else {
        this.setState({safety: nextValue});
        const formState = Object.assign({}, this.state.form)
        formState[name] = nextValue
        this.setState({form: formState})
      }
    }

    handleSubmit(event) {
      event.preventDefault();

      fetch(`${this.state.apiUrl}/reviews`,
        {
          body: JSON.stringify({review: this.state.form}),
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST"
        }
      )
      .then((rawResponse) => {
        return Promise.all([rawResponse.status, rawResponse.json()])
      })
      .then((parsedResponse) => {
        if (parsedResponse[0] === 422) {
          this.setState({errors: parsedResponse[1]})
        } else {
          const reviews = Object.assign([], this.state.reviews)
          reviews.push(parsedResponse[1])
          this.setState({
            reviews: reviews,
            errors: null,
            newReviewSuccess: true
          });
        }
      });
    }

    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }

    fileChangeHandler(event){
      const file = event.target.files[0]
      this.getBase64(file).then( (fileString) => {
        const formState = Object.assign({}, this.state.form)
        formState.avatar_base = fileString
        this.setState({form: formState})
      })
    }

    errorsFor(attribute){
      var errorString = ""
      if(this.props.errors && this.props.errors[attribute]){
        const errors = this.props.errors[attribute]
        if(errors){
          errorString = errors.join(", ")
        }
      }
      return errorString === "" ? null : errorString
    }

  render() {

    return (
      <div className="center">
        <div className="card">
          <h1 className = "title">Submit Your Review</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div> CHOOSE YOUR AREA </div>
              <select name='area' onChange={this.handleChange.bind(this)}>
                <option value="eastvillage">East Village</option>
                <option value="littleitaly">Little Italy</option>
                <option value="northpark">North Park</option>
                <option value="gaslamp">Gaslamp</option>
                <option value="coronado">Coronado</option>
                <option value="shelterisland">Shelter Island Area</option>
                <option value="oceanbeach">Ocean Beach</option>
                <option value="lomaportal">Loma Portal</option>
              </select>
            <div>
        <h3>Rate the Area: {this.state.area_rating}/5</h3>
        <StarRatingComponent
          name="area_rating"
          starCount={5}
          value={this.state.area_rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h3>Rate the Parking: {this.state.parking}/5</h3>
        <StarRatingComponent
          name="parking"
          starCount={5}
          value={this.state.parking}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h3>Rate the Cleanliness: {this.state.cleanliness}/5</h3>
        <StarRatingComponent
          name="cleanliness"
          starCount={5}
          value={this.state.cleanliness}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h3>Rate the Safety: {this.state.safety}/5</h3>
        <StarRatingComponent
          name="safety"
          starCount={5}
          value={this.state.safety}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h3>Rate the Dining: {this.state.dining}/5</h3>
        <StarRatingComponent
          name="dining"
          starCount={5}
          value={this.state.dining}
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
            <input
               className="form-item"
               placeholder="Write Your Review Here"
               name="review_text"
               type="textarea"
               onChange={this.handleChange.bind(this)}
               value={this.state.form.review_text}
             />
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

        { this.state.newReviewSuccess && <Redirect to={`${this.state.form.area}`} /> }
      </div>
    );
  }
}

export default NewReview
