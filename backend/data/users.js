import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Yoselyn C',
    email: 'yoss@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Leela Rutovitz',
    email: 'leela@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users