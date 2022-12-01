export const api = {
  icon: '🚀',
  name: 'pubsub.do',
  description: 'PubSub Publisher & Subscriber APIs',
  url: 'https://pubsub.do/api',
  type: 'https://apis.do/pubsub',
  endpoints: {
    listCategories: 'https://pubsub.do/api',
    getCategory: 'https://pubsub.do/:type',
  },
  site: 'https://pubsub.do',
  login: 'https://pubsub.do/login',
  signup: 'https://pubsub.do/signup',
  subscribe: 'https://pubsub.do/subscribe',
  repo: 'https://github.com/drivly/pubsub.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://pubsub.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
