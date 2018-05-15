
import axios from 'axios'
export const getRestauRantList = ( latitude, longitude, offset, restaurant_category_id = '')=>{
    // let supportStr = '';
	// support_ids.forEach(item => {
	// 	if (item.status) {
	// 		supportStr += '&support_ids[]=' + item.id;
	// 	}
	// });
	let data = {
		latitude,
		longitude,
		offset,
		limit: '20',
		
	};
	return axios('http://localhost:8000/shopping/restaurants', data);
}
