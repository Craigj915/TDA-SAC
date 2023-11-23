const mongoose = require('mongoose');
const { Role } = require('./models/role');

const predefinedRoles = [
  {
    role: 'user',
    // use array of strings to set permissions each user can perform
    // eg. 'create_user', 'view_report' etc.
    permissions: [],
  },
  {
    role: 'systemAdmin',
    permissions: [],
  },
  {
    role: 'manager',
    permissions: [],
  },
  {
    role: 'marketer',
    permissions: [],
  },
  {
    role: 'director',
    permissions: [],
  },
  {
    role: 'courseManager',
    permissions: [],
  },
  {
    role: 'staff',
    permissions: [],
  },
  {
    role: 'instructor',
    permissions: [],
  },
];
