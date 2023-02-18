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
      name: 'pun',
      title: 'Puns',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'About',
      type: 'richText',
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
