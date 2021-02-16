class storage{
  constructor(){
    this.city;
    this.state;
    this.defaultState = 'Boston';
    this.defaultCity = 'MA'

  }

  getStorage(){
    if(localStorage.getItem('city') === null){
      this.city = this.defaultCity;
    }else{
      this.city = localStorage.getItem('city');
    };

  
    if(localStorage.getItem('state') === null){
      this.state = this.defaultCity;
    }else{
      this.state = localStorage.getItem('city');
    };

    return {
      city: this.city,
      state: this.state
    }
  };

  setStorage(city,state){
   localStorage.setItem('city', city);
   localStorage.setItem('state', state)

  }
}