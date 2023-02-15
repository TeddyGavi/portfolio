export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'short',
      title: 'Short tagline',
      type: 'string',
    },
    {
      name: 'body',
      title: 'About',
      type: 'array',
      description: 'This will be the main tagline visible on the site',
      of: [
        {type: 'block'},
        {
          type: 'image',
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
    {
      name: 'gitHub',
      title: 'Github Profile',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter Link',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn Link',
      type: 'url',
    },
    {
      name: 'resume',
      title: 'Resume Link',
      type: 'url',
    },
  ],
}
