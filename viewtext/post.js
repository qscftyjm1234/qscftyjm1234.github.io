
<script src="./post.js"></script>
<script src="js/vue.min.js"></script>
<script src="js/axios-0.19.js"></script>
<script src="js/httpRequest.js"></script>
function axiosPostRequst(url, data) {
  let result = axios({
    method: 'post',
    url: url,
    data: data,
    transformRequest: [
      function (data) {
        let ret = '';
        for (let i in data) {
          ret +=
            encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&';
        }
        return ret;
      },
    ],
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      return 'exception=' + error;
    });
  return result;
}
