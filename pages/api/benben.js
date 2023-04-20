import { benben } from '../../data/benben.tw.js'

export default function handler(req, res) {
  res.status(200).json(benben)
}
