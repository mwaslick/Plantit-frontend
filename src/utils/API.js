import axios from "axios";

const API = {
    getToken: function () {
        return axios.post("http://localhost:3001/token")
    },
    getDatabasePlants: function (query) {
        return axios.get("http://localhost:3001/plants/search/" + query)
    },
    getUser: function(query) {
        return axios.get("http://localhost:3001/user/"+query)
    },
    getPlantID: function (slug) {
        return axios.get("http://localhost:3001/plant/" + slug)
    },
    getSearchedPlants: function (query, userToken, page) {
        return axios.get("http://localhost:3001/api/search/"+query+"/"+ userToken + "/" + page)
    },
    getNewPlant: function(slug, usertoken) {
        return axios.post("http://localhost:3001/api/slug/"+ slug+ "/"+usertoken)
    },
    getFeaturedPlants: function() {
        return axios.get("http://localhost:3001/findByComments")
    },
    favoritePlant: function (plantId, userId) {
        return axios.post("http://localhost:3001/myplants/create", {
          userId: userId,
          plantId: plantId,
        })
      }
}

export default API;