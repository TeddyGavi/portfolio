export default {
  name: 'richText',
  title: 'Rich Text Field',
  type: 'object',
  fields: [
    {
      name: 'body',
      title: 'Content',
      type: 'array',
      description: 'This section contains your content',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternate text',
              description: 'Make sure to provide alt text for screen readers',
            },
          ],
        },
      ],
    },
  ],
}
