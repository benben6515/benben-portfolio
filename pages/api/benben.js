import { benben } from '../../benben'

export default function handler (req, res) {
  res.status(200).json(benben)
}
