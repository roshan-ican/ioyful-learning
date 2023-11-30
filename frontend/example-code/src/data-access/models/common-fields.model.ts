const commonFieldsSchema = {
  created_by: {
    type: String,
    default: 'admin'
  },
  updated_by: {
    type: String,
    default: 'admin'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
};

export default commonFieldsSchema;
