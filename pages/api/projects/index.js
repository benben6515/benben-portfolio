import { projects } from '../../../data/data.tw'

export default function handler (req, res) {
  res.status(200).json(projects)
}