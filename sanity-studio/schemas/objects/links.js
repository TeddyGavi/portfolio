export default {
  name: 'links',
  title: 'Links',
  type: 'object',
  fields: [
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{name: 'url', title: 'URL', type: 'url'}],
    },
  ],
}
