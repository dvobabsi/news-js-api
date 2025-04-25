import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7a110283b19a45a283e6a82e7a27b8c9',
        });
    }
}
// class AppLoader extends Loader {
//     constructor() {
//         super(process.env.API_URL, {
//             apiKey: process.env.API_KEY,
//         });
//     }
// }

export default AppLoader;
