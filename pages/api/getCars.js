// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function commonFetcher(...args) {
  fetch(...args).then((res) => res.json())
}
