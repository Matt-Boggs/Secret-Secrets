import axios from "axios";

export default {
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the User with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  //============================================

  getSecrets: function() {
    return axios.get("/api/secrets");
  },
  getSecret: function(id) {
    return axios.get("/api/secrets/" + id);
  },
  deleteSecret: function(id) {
    return axios.delete("/api/secrets/" + id);
  },
  saveSecret: function(secretData) {
    return axios.post("/api/secrets", secretData);
  }
};
