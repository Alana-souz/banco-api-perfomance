import http, { post } from 'k6/http';
import { sleep, check } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export const options = {
  /*
  stages: [
    { duration: '5s', target: 10 },
    { duration: '20m', target: 10 },
    { duration: '5s', target: 0 },
  ],
  */
  iterations: 1,
  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<5000'],
    http_req_failed: ['rate<0.01']
  }

};

export default function () {
  const url = 'http://localhost:3000/login';

  postLogin.username = "junior.Lima"
  console.log(postLogin)
  const payload = JSON.stringify(postLogin);
    
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);
  check(res, {
    'Validar que status e 200': (r) => r.status === 200,
    'Validar que o token é string': (r) => typeof(r.json().token) == 'string'
  })
  sleep(1);

  }
