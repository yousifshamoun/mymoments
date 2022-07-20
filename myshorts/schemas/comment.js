export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'posterBy',
      title: 'Posted By',
      type: 'postedBy',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
  ],
};
