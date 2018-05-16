const recode_address = 'recode_address'
const save_geohash = 'save_geohash'

export default{
    [recode_address](state,{latitude,longitude}){
        state.latitude = latitude;
        state.longitude = longitude;
    },
    [save_geohash](state,geohash){
        state.geohash = geohash;
    }
}