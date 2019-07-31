
//--Each User Information--//
class User {
  constructor(id, pw, name) {
    this.id = id;
    this.password = pw;
    this.user_name = name;
    this.itienaries = [];
  }

  setAsGuide() {
    //factory pattern
  }

  buildNewItinerary(start, end, activity, adults, kids){
    const itinerary = new Itinerary(this, start, end, activity, adults, kids);
    this.itienaries.push(itinerary);
  }

  getItinerary(index){
    return this.itienaries[index];
  }
}

class Guide extends User {
  constructor(id, pw, name) {
    super(id,pw,name);
    this.schedule = []; //For all scheduled proposal
    this.applied = []; //For all applied proposal
  }
  
  makeAnOffer(itinerary, price) {
    const newoffer = new Offer(this, price)
    itinerary.offerlist.push(newoffer);
  }
}

//--Travel Proposal Information--//
class Itinerary {
  constructor(user, start, end, activity, adults, kids) {
    this.guest = user;
    this.start_date = start;
    this.end_date = end;
    this.activity = activity;
    this.adults = adults;
    this.kids = kids;
    this.confirmed = false;
    this.guide = '';
    this.offerlist = [];
    this.price = '';
    this.ispaid = false;
  }

  confirmItinerary(){
    this.confirmed = !this.confirmed;
  }
}

class Offer{
  constructor(guide, price) {
    this.guide = guide;
    this.price = price;
  }
}

//--Testing Data--//
function getTesting() {
  const user1 = new User("test0", "0000", "John");
  user1.buildNewItinerary("2019/07/13", "2019/07/14", "Surfing and Hiking", 2, 1);
  const guide1 = new Guide("test1", "0000", "Leon May");
  const guide2 = new Guide("test2", "0000", "Ericson John");
  const tempitin = user1.itienaries[0];
  guide1.makeAnOffer(tempitin, 75);
  guide2.makeAnOffer(tempitin, 50);
  return user1;
}

export default getTesting;
