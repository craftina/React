const url = 'http://localhost:3030/data'

export function getAll() {
  return fetch(`${url}/games?sortBy=_createdOn%20desc`)
    .then(res => res.json());

}

export function getOne(id) {
  return fetch(`${url}/games/${id}`)
    .then(res => res.json());
}