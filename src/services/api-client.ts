import axios from "axios";

export default axios.create({
baseURL:'https://api.rawg.io/api',
params:{
    key: '6098ec22573444738c1476faf78c6835'
}
})

