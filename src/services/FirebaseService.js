import firebase from "../firebase";

// https://firebaseio.com/
const db = firebase.ref("/tournamentapp-553d2");

class FirebaseService {
  getAll() {
    return db.child("/groups");
  }

  getAllGroups() {
    return db.child("/groups");
  }

  create(tutorial) {
    return db.child("/teams").push(tutorial);
  }

  createGroup(group) {
    return db.child("/groups").push(group);
  }

  createNewTeam(key, team) {
    return db
      .child("/groups")
      .child(key)
      .child("/teams")
      .push(team);
  }

  uploadFile(post) {
    return db.child("/photos").push(post);
  }
  createNewMatch(key, match) {
    return db
      .child("/groups")
      .child(key)
      .child("/matches")
      .push(match);
  }

  updateMatch(key, matchkey, match) {
    return db
      .child("/groups")
      .child(key)
      .child("/matches")
      .child(matchkey)
      .update(match);
  }

  addMerchandiseToTeam(key, teamkey, merchandise) {
    return db
      .child("/groups")
      .child(key)
      .child("/teams")
      .child(teamkey)
      .child("/merchandises")
      .push(merchandise);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new FirebaseService();