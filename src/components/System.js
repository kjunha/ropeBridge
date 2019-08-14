
//--Each User Information--//
class User {
  constructor(id, pw, name) {
    this.id = id;
    this.password = pw;
    this.user_name = name;
    this.itineraries = [];
    this.email = ''; //TODO: should be added to constructor param.
  }

  setAsGuide() {
    //factory pattern
  }

  buildNewItinerary(start, end, activity, adults, kids){
    const itinerary = new Itinerary(this, start, end, activity, adults, kids);
    this.itineraries.push(itinerary);
  }
}

class Guide extends User {
  constructor(id, pw, name) {
    super(id,pw,name);
    this.schedule = []; //For all scheduled proposal
    this.applied = []; //For all applied proposal
    this.tourhistory = [];
    this.rating = 0;
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
    this.rating = 0;
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

  const guide1 = new Guide("test1", "0000", "Leon May");
  const guide2 = new Guide("test2", "0000", "Ericson John");

  user1.buildNewItinerary("2019/07/13", "2019/07/14", "Surfing and Hiking", 2, 1);
  const tempitin0 = user1.itineraries[0];
  guide1.makeAnOffer(tempitin0, 75);
  guide2.makeAnOffer(tempitin0, 50);

  user1.buildNewItinerary("2019/08/03", "2019/08/07", "Family Trip", 3, 2);
  const tempitin1 = user1.itineraries[1];
  tempitin1.confirmed = true;
  tempitin1.guide = guide1;
  tempitin1.price = 120;
  guide1.makeAnOffer(tempitin1, 75);

  user1.buildNewItinerary("2019/09/23", "2019/09/25", "Local Travel", 1, 0);

  return user1;
}

export default getTesting;
